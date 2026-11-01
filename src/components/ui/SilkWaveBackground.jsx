import React, { useEffect, useRef, useState } from 'react';

export default function SilkWaveBackground({ className = '' }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setUseFallback(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { 
      alpha: true, 
      antialias: true,
      powerPreference: 'low-power' 
    });

    if (!gl) {
      setUseFallback(true);
      return;
    }

    // Vertex shader
    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = (position + 1.0) * 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader: multi-layer flowing silk waves in #F7FAFC -> #DCE8F2 -> #BCD3E6
    const fsSource = `
      precision mediump float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      varying vec2 vUv;

      // Smooth noise function
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        float aspect = uResolution.x / uResolution.y;
        vec2 p = uv;
        p.x *= aspect;

        // Gentle time drift
        float t = uTime * 0.12;

        // Mouse influence (subtle)
        vec2 m = uMouse * 0.05;

        // Layer 1: Broad flowing silk wave
        float wave1 = sin(p.x * 1.8 + t + sin(p.y * 2.2 + t * 0.6) * 1.5 + m.x) * 0.25;
        // Layer 2: Fine secondary ribbon
        float wave2 = sin(p.x * 3.2 - t * 0.8 + cos(p.y * 2.8 - t * 0.5) * 1.2) * 0.18;
        // Layer 3: High-frequency delicate silk streak
        float wave3 = sin(p.x * 5.0 + t * 1.2 + p.y * 3.5) * 0.08;

        float combined = (p.y - 0.45) + wave1 + wave2 + wave3;
        
        // Ribbon thickness & glow intensity
        float ribbon1 = smoothstep(0.35, 0.0, abs(combined));
        float ribbon2 = smoothstep(0.20, 0.0, abs(combined + 0.12));
        float highlight = smoothstep(0.08, 0.0, abs(combined - 0.04));

        // Color definitions (high-key, light, calming palette)
        // Background: #F7FAFC
        vec3 bg = vec3(0.968, 0.980, 0.988);
        // Soft ice blue ribbon: #DCE8F2
        vec3 iceBlue = vec3(0.863, 0.910, 0.949);
        // Deeper luminous wave: #BCD3E6
        vec3 deepSilk = vec3(0.737, 0.827, 0.902);
        // Crisp white silk highlight
        vec3 silkWhite = vec3(1.0, 1.0, 1.0);

        // Mix the wave colors smoothly
        vec3 col = bg;
        col = mix(col, iceBlue, ribbon1 * 0.65);
        col = mix(col, deepSilk, ribbon2 * 0.45);
        col = mix(col, silkWhite, highlight * 0.85);

        // Gentle vignette to fade towards top and edges
        float edgeFade = smoothstep(0.0, 0.25, uv.y) * smoothstep(1.0, 0.85, uv.y);
        col = mix(bg, col, clamp(edgeFade + 0.1, 0.0, 1.0));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compile failed:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) {
      setUseFallback(true);
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link failed:', gl.getProgramInfoLog(program));
      setUseFallback(true);
      return;
    }

    gl.useProgram(program);

    // Full screen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]), gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'uTime');
    const uResolutionLoc = gl.getUniformLocation(program, 'uResolution');
    const uMouseLoc = gl.getUniformLocation(program, 'uMouse');

    let animationFrameId;
    let isRunning = true;
    let mouse = [0.0, 0.0];
    const startTime = performance.now();

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    }

    function render() {
      if (!isRunning) return;
      resize();
      const elapsed = (performance.now() - startTime) * 0.001;
      gl.uniform1f(uTimeLoc, elapsed);
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.uniform2f(uMouseLoc, mouse[0], mouse[1]);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    }

    // Gentle mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouse = [x, y];
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pause rendering when tab hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Pause rendering when scrolled out of view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!isRunning) {
            isRunning = true;
            animationFrameId = requestAnimationFrame(render);
          }
        } else {
          isRunning = false;
          cancelAnimationFrame(animationFrameId);
        }
      });
    }, { threshold: 0.05 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Start loop
    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  if (useFallback) {
    return (
      <div 
        ref={containerRef}
        className={`absolute inset-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#F7FAFC] via-[#EEF3F8] to-[#F7FAFC] ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,#DCE8F2_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7FAFC]" />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block"
      />
      {/* Soft gradient mask to blend seamlessly into solid #F7FAFC below hero */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F7FAFC] via-[#F7FAFC]/80 to-transparent pointer-events-none" />
    </div>
  );
}

