'use client';

import React, { useEffect, useRef } from 'react';

// Dark violet water-like background with mouse tracing highlights
// Renders a full-bleed canvas behind the section and paints soft, fading
// light-violet ripples where the mouse moves.
const WaterTraceBackground = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const dropsRef = useRef([]); // {x, y, r, maxR, alpha, decay}
  const dprRef = useRef(1);
  const boundsRef = useRef({ left: 0, top: 0, width: 0, height: 0 });
  const timeRef = useRef(0);

  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const rect = parent.getBoundingClientRect();
    boundsRef.current = rect;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    dprRef.current = dpr;
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    // Paint base once to avoid initial black flash
    const ctx = canvas.getContext('2d');
    paintBase(ctx);
  };

  const paintBase = (ctx) => {
    const { width: w, height: h } = ctx.canvas;
    // Base gradient (dark violet)
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#0b0018');
    g.addColorStop(1, '#150032');
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  };

  const addDrop = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = boundsRef.current;
    // Only add if inside the section bounds
    if (
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom
    ) {
      return;
    }
    const dpr = dprRef.current;
    const x = (clientX - rect.left) * dpr;
    const y = (clientY - rect.top) * dpr;
    dropsRef.current.push({
      x,
      y,
      r: 2 + Math.random() * 4,
      maxR: 80 * dpr + Math.random() * (140 * dpr),
      alpha: 0.55,
      decay: 0.007 + Math.random() * 0.01,
      growth: 0.9 + Math.random() * 1.4,
    });
    // Cap the number of concurrent drops to keep perf stable
    if (dropsRef.current.length > 150) {
      dropsRef.current.splice(0, dropsRef.current.length - 150);
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { width: w, height: h } = ctx.canvas;

    // Gentle persistence fade for trails
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.085; // lower alpha => longer trail persistence
    ctx.fillStyle = '#09001a';
    ctx.fillRect(0, 0, w, h);

    // Subtle moving shimmer to evoke water
    timeRef.current += 0.006;
    const t = timeRef.current;
    const shimmer = ctx.createLinearGradient(0, 0, w, h);
    // Light violet bands drifting
    const a = 0.04 + 0.02 * Math.sin(t * 2.0);
    shimmer.addColorStop(0.0, `rgba(122, 92, 255, ${a})`);
    shimmer.addColorStop(0.5, 'rgba(0,0,0,0)');
    shimmer.addColorStop(1.0, `rgba(122, 92, 255, ${a * 0.9})`);
    ctx.globalAlpha = 1;
    ctx.fillStyle = shimmer;
    ctx.fillRect(0, 0, w, h);

    // Draw drops with additive light to lighten background
    ctx.globalCompositeOperation = 'lighter';
    const drops = dropsRef.current;
    for (let i = drops.length - 1; i >= 0; i--) {
      const d = drops[i];
      d.r += d.growth; // expand
      d.alpha -= d.decay; // fade
      if (d.alpha <= 0 || d.r >= d.maxR) {
        drops.splice(i, 1);
        continue;
      }

      const rg = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
      // inner light and soft falloff
      rg.addColorStop(0.0, `rgba(180, 160, 255, ${Math.max(0, d.alpha)})`);
      rg.addColorStop(0.4, `rgba(150, 125, 255, ${Math.max(0, d.alpha * 0.55)})`);
      rg.addColorStop(1.0, 'rgba(0,0,0,0)');
      ctx.fillStyle = rg;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Restore composition for next frame
    ctx.globalCompositeOperation = 'source-over';
    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    resize();
    const onMove = (e) => addDrop(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        addDrop(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('resize', resize);
    const vis = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafRef.current);
      } else {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', vis);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', vis);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="water-trace-canvas"
      aria-hidden="true"
    />
  );
};

export default WaterTraceBackground;
