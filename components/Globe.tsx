import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

export const Globe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const previousPointerPosition = useRef({ x: 0, y: 0 });
  const [webglAvailable, setWebglAvailable] = useState(true);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setWebglAvailable(false);
      return;
    }

    if (!containerRef.current) return;

    let renderer: THREE.WebGLRenderer;
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false });
    } catch (e) {
      console.warn("WebGL initialization failed, falling back to SVG Globe:", e);
      setWebglAvailable(false);
      return;
    }
    
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
      if (renderer) {
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      }
    };
  }, []);

  if (!webglAvailable) {
    return (
      <div className="w-full h-[320px] md:h-[600px] bg-[#0F172A] relative overflow-hidden flex items-center justify-center p-4">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes rotateGrid {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes laserFlow {
            to { stroke-dashoffset: -40; }
          }
          @keyframes ripple {
            0% { transform: scale(0.6); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: scale(2.2); opacity: 0; }
          }
          .rotating-grid {
            transform-origin: center;
            animation: rotateGrid 160s linear infinite;
          }
          .shipping-lane {
            stroke-dasharray: 6 4;
            animation: laserFlow 1.8s linear infinite;
          }
          .pulsing-ring {
            transform-origin: center;
            animation: ripple 2.5s cubic-bezier(0.25, 0, 0, 1) infinite;
          }
        ` }} />
        
        <div className="relative w-full max-w-[800px] aspect-[16/10] flex items-center justify-center">
          {/* Animated SVG */}
          <svg viewBox="0 0 800 500" className="w-full h-full text-[#334155]/60 z-0">
            <defs>
              <radialGradient id="glowG" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Background Atmosphere */}
            <circle cx="400" cy="250" r="240" fill="url(#glowG)" />

            {/* Rotating Latitude/Longitude Grid Lines */}
            <g className="rotating-grid">
              <circle cx="400" cy="250" r="220" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
              <circle cx="400" cy="250" r="170" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
              <circle cx="400" cy="250" r="110" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
              <line x1="160" y1="250" x2="640" y2="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="400" y1="10" x2="400" y2="490" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="230" y1="80" x2="570" y2="420" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="230" y1="420" x2="570" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            </g>

            {/* Connecting Shipping Lanes (Curved Paths) */}
            <g>
              <path d="M 350 140 Q 410 180 480 220" fill="none" stroke="#C5A059" strokeWidth="1.2" opacity="0.45" className="shipping-lane" />
              <path d="M 480 220 Q 560 260 650 310" fill="none" stroke="#C5A059" strokeWidth="1.2" opacity="0.45" className="shipping-lane" />
              <path d="M 480 220 Q 450 270 420 330" fill="none" stroke="#C5A059" strokeWidth="1.2" opacity="0.45" className="shipping-lane" />
              <path d="M 350 140 Q 380 230 420 330" fill="none" stroke="#C5A059" strokeWidth="1.2" opacity="0.45" className="shipping-lane" />
            </g>

            {/* Glowing Target/Ripples under nodes */}
            <g>
              {[
                { name: 'EUROPE', x: 350, y: 140 },
                { name: 'GCC', x: 480, y: 220 },
                { name: 'SE ASIA', x: 650, y: 310 },
                { name: 'AFRICA', x: 420, y: 330 },
              ].map((pt) => (
                <g key={pt.name}>
                  <circle cx={pt.x} cy={pt.y} r="18" fill="none" stroke="#C5A059" strokeWidth="1" className="pulsing-ring" />
                  <circle cx={pt.x} cy={pt.y} r="5" fill="#C5A059" />
                  <circle cx={pt.x} cy={pt.y} r="2" fill="#FFFFFF" />
                </g>
              ))}
            </g>

            {/* Port/Region Labels */}
            <g>
              {[
                { name: 'EUROPE', x: 350, y: 140, textAnchor: 'end', dx: -14, dy: 4 },
                { name: 'GCC HQ', x: 480, y: 220, textAnchor: 'start', dx: 14, dy: 4 },
                { name: 'SE ASIA', x: 650, y: 310, textAnchor: 'start', dx: 14, dy: 4 },
                { name: 'AFRICA', x: 420, y: 330, textAnchor: 'end', dx: -14, dy: 4 },
              ].map((pt) => {
                const isHovered = hoveredNode === pt.name;
                return (
                  <g 
                    key={pt.name} 
                    className="cursor-pointer pointer-events-auto z-10"
                    onMouseEnter={() => setHoveredNode(pt.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <rect 
                      x={pt.textAnchor === 'start' ? pt.x + pt.dx - 8 : pt.x + pt.dx - 122}
                      y={pt.y - 12}
                      width="130"
                      height="24"
                      rx="4"
                      fill="#0B1120"
                      stroke={isHovered ? "#C5A059" : "transparent"}
                      strokeWidth="1"
                      opacity={isHovered ? "0.9" : "0.5"}
                    />
                    <text 
                      x={pt.x} 
                      y={pt.y} 
                      dx={pt.dx} 
                      dy={pt.dy} 
                      fill={isHovered ? "#FFFFFF" : "#C5A059"}
                      fontSize="10" 
                      fontWeight="bold"
                      fontFamily="Inter, system-ui, sans-serif"
                      textAnchor={pt.textAnchor}
                    >
                      {pt.name.toUpperCase()}
                    </text>
                    <circle cx={pt.x} cy={pt.y} r="25" fill="transparent" />
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Interactive Info Floating Tooltip Card */}
          <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-white/5 p-3 rounded-lg shadow-2xl backdrop-blur-md max-w-sm mx-auto transition-all duration-300 pointer-events-none text-center">
            <p className="text-[9px] text-[#C5A059] uppercase tracking-[0.2em] font-black mb-0.5">Interactive Logistics Network</p>
            <h4 className="text-white font-bold text-xs">
              {hoveredNode ? hoveredNode : "Global Transit Highway"}
            </h4>
            <p className="text-white/50 text-[10px] leading-relaxed">
              {hoveredNode === 'EUROPE' && "Western corridor operations bridging industrial capitals and shipping ports."}
              {hoveredNode === 'GCC HQ' && "Primary regional clearing terminal coordinating heavy cargo in Middle East."}
              {hoveredNode === 'SE ASIA' && "Pinnacle transshipment center managing critical eastbound channels."}
              {hoveredNode === 'AFRICA' && "Major land logistics depots connecting emergent southern trade routes."}
              {!hoveredNode && "Active freight channels establishing continuous marine, aviation, and land connectivity routes."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[240px] sm:h-[320px] md:h-[600px] cursor-grab active:cursor-grabbing touch-none"
      aria-label="3D Global Reach Visualization"
    />
  );
};