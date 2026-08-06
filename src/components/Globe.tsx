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
  const [webglAvailable, setWebglAvailable] = useState(true);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setWebglAvailable(false);
      return;
    }

    if (!containerRef.current) return;

    let renderer: THREE.WebGLRenderer;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false });
    } catch (e) {
      console.warn("WebGL initialization failed, falling back to SVG Globe:", e);
      setWebglAvailable(false);
      return;
    }
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Globe Geometry
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x1e293b,
      transparent: true,
      opacity: 0.8,
      wireframe: true,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Points of interest (Logos/Markers)
    const points = [
      { lat: 25.2048, lon: 55.2708 }, // Dubai
      { lat: 19.0760, lon: 72.8777 }, // Mumbai
      { lat: 1.3521, lon: 103.8198 }, // Singapore
      { lat: 51.5074, lon: -0.1278 }, // London
      { lat: -1.2921, lon: 36.8219 }, // Nairobi
    ];

    points.forEach(point => {
      const phi = (90 - point.lat) * (Math.PI / 180);
      const theta = (point.lon + 180) * (Math.PI / 180);
      const x = -(5.1 * Math.sin(phi) * Math.cos(theta));
      const z = (5.1 * Math.sin(phi) * Math.sin(theta));
      const y = (5.1 * Math.cos(phi));

      const markerGeom = new THREE.SphereGeometry(0.1, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ color: 0xC5A059 });
      const marker = new THREE.Mesh(markerGeom, markerMat);
      marker.position.set(x, y, z);
      globe.add(marker);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 12;

    // Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      globe.rotation.y += deltaMove.x * 0.005;
      globe.rotation.x += deltaMove.y * 0.005;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    containerRef.current.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDragging) {
        globe.rotation.y += 0.002;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      
      // Responsive camera distance
      if (window.innerWidth < 768) {
        camera.position.z = 18;
      } else {
        camera.position.z = 12;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      containerRef.current?.removeEventListener('mousedown', handleMouseDown);
      if (renderer) renderer.dispose();
    };
  }, []);

  if (!webglAvailable) {
    return (
      <div className="w-full h-full bg-[#0F172A] relative overflow-hidden flex items-center justify-center p-4">
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
              <path d="M 240 220 Q 390 140 540 200" fill="none" stroke="#C5A059" strokeWidth="1.2" opacity="0.45" className="shipping-lane" />
              <path d="M 540 200 Q 550 250 580 310" fill="none" stroke="#C5A059" strokeWidth="1.2" opacity="0.45" className="shipping-lane" />
              <path d="M 540 200 Q 610 290 680 410" fill="none" stroke="#C5A059" strokeWidth="1.2" opacity="0.45" className="shipping-lane" />
              <path d="M 540 200 Q 420 300 360 400" fill="none" stroke="#C5A059" strokeWidth="1.2" opacity="0.45" className="shipping-lane" />
              <path d="M 240 220 Q 280 320 360 400" fill="none" stroke="#C5A059" strokeWidth="1.2" opacity="0.45" className="shipping-lane" />
            </g>

            {/* Glowing Target/Ripples under nodes */}
            <g>
              {[
                { name: 'London', x: 240, y: 220 },
                { name: 'Dubai', x: 540, y: 200 },
                { name: 'Mumbai', x: 580, y: 310 },
                { name: 'Singapore', x: 680, y: 410 },
                { name: 'Nairobi', x: 360, y: 400 },
              ].map((pt) => (
                <g key={pt.name}>
                  <circle cx={pt.x} cy={pt.y} r="18" fill="none" stroke="#C5A059" strokeWidth="1" className="pulsing-ring" />
                  <circle cx={pt.x} cy={pt.y} r="5" fill="#C5A059" />
                  <circle cx={pt.x} cy={pt.y} r="2" fill="#FFFFFF" />
                </g>
              ))}
            </g>

            {/* Port Labels & Interactive Hitboxes */}
            <g>
              {[
                { name: 'London Hub', x: 240, y: 220, textAnchor: 'end', dx: -14, dy: 4, details: 'European Distribution' },
                { name: 'Dubai HQ', x: 540, y: 200, textAnchor: 'start', dx: 14, dy: 4, details: 'Primary Global Hub' },
                { name: 'Mumbai Terminal', x: 580, y: 310, textAnchor: 'start', dx: 14, dy: 4, details: 'South Asian Gateway' },
                { name: 'Singapore Port', x: 680, y: 410, textAnchor: 'start', dx: 14, dy: 4, details: 'Transshipment Center' },
                { name: 'Nairobi Depot', x: 360, y: 400, textAnchor: 'end', dx: -14, dy: 4, details: 'East African Gate' },
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
              {hoveredNode === 'London Hub' && "Gateway for Western Europe maritime transport and continent-wide land connections."}
              {hoveredNode === 'Dubai HQ' && "Central coordination point for international multi-modal freight transport."}
              {hoveredNode === 'Mumbai Terminal' && "Primary distribution arterial link for heavy dry goods cargo on the subcontinent."}
              {hoveredNode === 'Singapore Port' && "Pinnacle deep-water marine transshipment and dynamic Asia-Pacific shipping lines."}
              {hoveredNode === 'Nairobi Depot' && "Inland container depot linking East African markets to the Global Logistics belt."}
              {!hoveredNode && "Active freight channels establishing continuous marine, aviation, and land connectivity routes."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};
