import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Globe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const previousPointerPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const createTextTexture = (text: string) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return null;
      
      canvas.width = 256;
      canvas.height = 64;
      
      context.font = 'Bold 32px Inter, Arial';
      context.fillStyle = '#C5A059'; // Antique Gold
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, 128, 32);
      
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x0F172A, // Midnight Navy
      transparent: true,
      opacity: 0.8,
      wireframe: true,
    });
    const globe = new THREE.Mesh(geometry, material);
    globeGroup.add(globe);

    const pointsGeometry = new THREE.SphereGeometry(5.1, 48, 48);
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x334155,
      size: 0.04,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    globeGroup.add(points);

    const markerGroup = new THREE.Group();
    globeGroup.add(markerGroup);

    const createMarker = (lat: number, lon: number, color: number, name: string) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const radius = 5.1;
      
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = (radius * Math.sin(phi) * Math.sin(theta));
      const y = (radius * Math.cos(phi));

      const markerGeom = new THREE.SphereGeometry(0.12, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ color });
      const marker = new THREE.Mesh(markerGeom, markerMat);
      marker.position.set(x, y, z);
      
      const glowGeom = new THREE.SphereGeometry(0.25, 16, 16);
      const glowMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.3 });
      const glow = new THREE.Mesh(glowGeom, glowMat);
      glow.position.set(x, y, z);

      const texture = createTextTexture(name);
      if (texture) {
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(x * 1.15, y * 1.15, z * 1.15);
        sprite.scale.set(1.5, 0.375, 1);
        markerGroup.add(sprite);
      }
      
      markerGroup.add(marker);
      markerGroup.add(glow);
    };

    const regions = [
      { name: 'GCC', lat: 24, lon: 45, color: 0xC5A059 },
      { name: 'EUROPE', lat: 50, lon: 10, color: 0xC5A059 },
      { name: 'SE ASIA', lat: 15, lon: 100, color: 0xC5A059 },
      { name: 'AFRICA', lat: 0, lon: 20, color: 0xC5A059 }
    ];

    regions.forEach(r => {
      createMarker(r.lat, r.lon, r.color, r.name);
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Dynamic initial camera position to fit content exactly
    const updateCameraPos = () => {
      const aspect = container.clientWidth / container.clientHeight;
      // On narrow screens (aspect < 1), pull back the camera significantly to fit labels
      if (aspect < 1) {
        // Increased pull back for mobile (aspect ratio usually < 0.8)
        camera.position.z = Math.min(12 / aspect, 22);
      } else {
        camera.position.z = 12;
      }
    };
    updateCameraPos();

    const onPointerDown = (event: PointerEvent) => {
      isDragging.current = true;
      previousPointerPosition.current = { x: event.clientX, y: event.clientY };
      container.style.cursor = 'grabbing';
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging.current) return;
      const deltaMove = {
        x: event.clientX - previousPointerPosition.current.x,
        y: event.clientY - previousPointerPosition.current.y,
      };
      globeGroup.rotation.y += deltaMove.x * 0.005;
      globeGroup.rotation.x += deltaMove.y * 0.005;
      previousPointerPosition.current = { x: event.clientX, y: event.clientY };
    };

    const onPointerUp = () => {
      isDragging.current = false;
      container.style.cursor = 'grab';
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDragging.current) {
        globeGroup.rotation.y += 0.0015;
        globeGroup.rotation.x *= 0.99;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      updateCameraPos();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[240px] sm:h-[320px] md:h-[600px] cursor-grab active:cursor-grabbing touch-none"
      aria-label="3D Global Reach Visualization"
    />
  );
};