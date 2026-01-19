'use client'
import React, { useEffect, useRef } from 'react';
import { createNoise4D } from 'simplex-noise';

const AsciiBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const CELL_SIZE = 6;
  const characters = ' .:-=+*#%@';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const noise4D = createNoise4D();

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    // Water simulation buffers
    let buffer1: Float32Array;
    let buffer2: Float32Array;
    let currentBuffer: Float32Array;
    let previousBuffer: Float32Array;

    // Track previous frame values for dirty checking
    let prevChars: Uint8Array;

    const DAMPING = 0.94;
    const SPREAD = 0.5;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.ceil(width / CELL_SIZE);
      rows = Math.ceil(height / CELL_SIZE);

      const size = cols * rows;
      buffer1 = new Float32Array(size);
      buffer2 = new Float32Array(size);
      currentBuffer = buffer1;
      previousBuffer = buffer2;
      prevChars = new Uint8Array(size);
      prevChars.fill(255); // Force full redraw

      // Reset canvas state after resize (canvas resize clears context state)
      ctx.font = `${CELL_SIZE}px monospace`;
      ctx.textBaseline = 'top';
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
    };

    resizeCanvas();

    const addDrop = (x: number, y: number, radius: number, strength: number) => {
      const gridX = Math.floor(x / CELL_SIZE);
      const gridY = Math.floor(y / CELL_SIZE);
      const r = Math.ceil(radius / CELL_SIZE);
      const rSq = r * r;

      for (let dy = -r; dy <= r; dy++) {
        const py = gridY + dy;
        if (py < 0 || py >= rows) continue;

        for (let dx = -r; dx <= r; dx++) {
          const px = gridX + dx;
          if (px < 0 || px >= cols) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < rSq) {
            currentBuffer[py * cols + px] += strength * (1 - Math.sqrt(distSq) / r);
          }
        }
      }
    };

    let lastX = -1;
    let lastY = -1;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (lastX >= 0) {
        const dx = x - lastX;
        const dy = y - lastY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 2) {
          const steps = Math.ceil(dist / 5);
          const invSteps = 1 / steps;
          for (let i = 0; i <= steps; i++) {
            const t = i * invSteps;
            addDrop(lastX + dx * t, lastY + dy * t, 4, 0.15);
          }
        }
      }

      lastX = x;
      lastY = y;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY } as MouseEvent);
      }
    };

    const simulateWater = () => {
      const c = cols;
      const r = rows;
      const prev = previousBuffer;
      const curr = currentBuffer;

      for (let y = 1; y < r - 1; y++) {
        const row = y * c;
        const rowUp = row - c;
        const rowDown = row + c;

        for (let x = 1; x < c - 1; x++) {
          const i = row + x;
          curr[i] = ((prev[i - 1] + prev[i + 1] + prev[rowUp + x] + prev[rowDown + x]) * SPREAD - curr[i]) * DAMPING;
        }
      }

      const temp = previousBuffer;
      previousBuffer = currentBuffer;
      currentBuffer = temp;
    };

    const render = () => {
      simulateWater();

      const time = timeRef.current;
      const curr = currentBuffer;
      const charLen = characters.length - 1;

      // Clear only changed cells by drawing white rect, then char
      for (let row = 0; row < rows; row++) {
        const rowIdx = row * cols;
        const cellY = row * CELL_SIZE;

        for (let col = 0; col < cols; col++) {
          const idx = rowIdx + col;
          const cellX = col * CELL_SIZE;

          // Compute noise inline for smoothness
          const angleX = (cellX / width) * Math.PI * 0.2;
          const angleY = (cellY / height) * Math.PI * 0.2;
          const noiseValue = noise4D(
            Math.cos(angleX),
            Math.sin(angleX),
            Math.cos(angleY),
            Math.sin(angleY) + time
          );
          const noiseIntensity = (noiseValue + 1) * 0.5;

          const waterValue = Math.abs(curr[idx]);
          const combined = Math.min(1, noiseIntensity * 0.8 + waterValue * 2);

          const charIndex = combined > 0.05 ? Math.floor(combined * charLen) : 0;

          // Only redraw if character changed
          if (prevChars[idx] !== charIndex) {
            prevChars[idx] = charIndex;

            // Clear cell
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cellX, cellY, CELL_SIZE, CELL_SIZE);

            // Draw character
            if (charIndex > 0) {
              const gray = Math.floor(220 - combined * 200);
              ctx.fillStyle = `rgb(${gray},${gray},${gray})`;
              ctx.fillText(characters[charIndex], cellX, cellY);
            }
          }
        }
      }

      timeRef.current += 0.001;
      frameRef.current = requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default AsciiBackground;
