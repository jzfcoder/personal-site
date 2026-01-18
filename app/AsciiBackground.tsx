'use client'
import React, { useEffect, useRef } from 'react';
import { createNoise4D } from 'simplex-noise';

export type AsciiProps = {
  inverse?: boolean
  cX?: number,
  cY?: number,
  rW?: number,
  rH?: number,
  fR?: number,
}

const AsciiBackground: React.FC<AsciiProps> = ({ inverse, cX=2, cY=2, rW=5, rH=5, fR=2 }: AsciiProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight + 10;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();

    const simplex = createNoise4D();
    const characters = '@#%*+=-:. ';
    const charArray = characters.split('');
    let time = 0;

    const centerX = () => canvas.width / cX;
    const centerY = () => canvas.height / cY;
    const rectWidth = () => canvas.width / rW;
    const rectHeight = () => canvas.height / rH;
    const fadeRadius = () => Math.min(canvas.width, canvas.height) / fR;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < canvas.height; y += 10) { // Adjust step to match font size
        for (let x = 0; x < canvas.width; x += 10) { // Adjust step to match font size
          const angleX = (x / canvas.width) * Math.PI * 2 * 0.1; // Increased scaling factor
          const angleY = (y / canvas.height) * Math.PI * 2 * 0.1; // Increased scaling factor
          const value = simplex(Math.cos(angleX), Math.sin(angleX), Math.cos(angleY), Math.sin(angleY) + time);
          const brightness = Math.floor((value + 1) * 127.5); // Normalize value to [0, 255]
          const charIndex = Math.floor((value + 1) / 2 * (charArray.length - 1));
          const char = charArray[charIndex];

          // Calculate distance from the edges of the middle rectangle
          const dx = Math.max(Math.abs(x - centerX()) - rectWidth() / 2, 0);
          const dy = Math.max(Math.abs(y - centerY()) - rectHeight() / 2, 0);
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Adjust brightness based on distance
          const fadeFactor = Math.min(1, distance / fadeRadius());
          let adjustedBrightness = 1
          if (inverse) {
            adjustedBrightness = brightness * fadeFactor;
          } else {
            adjustedBrightness = brightness * (1 - fadeFactor);
          }

          const invertedBrightness = 255 - adjustedBrightness;
          ctx.fillStyle = `rgb(${invertedBrightness}, ${invertedBrightness}, ${invertedBrightness})`;
          ctx.fillText(char, x, y + 20); // Adjust position to match font size
        }
      }

      time += 0.001; // Slower increment to create a slower animation
      requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: -10, left: 0, zIndex: -1 }} />;
};

export default AsciiBackground;

// 'use client'
// import React, { useEffect, useRef } from 'react';
// import { createNoise4D } from 'simplex-noise';

// const AsciiBackground: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const width = window.innerWidth;
//     const height = window.innerHeight + 10;
//     canvas.width = width;
//     canvas.height = height;

//     const simplex = createNoise4D();
//     const characters = '@#%*+=-:. ';
//     const charArray = characters.split('');
//     let time = 0;

//     const centerX = width / 2;
//     const centerY = height / 2;
//     const rectWidth = width / 5;
//     const rectHeight = height / 5;
//     const fadeRadius = Math.min(width, height) / 2; // Adjust this value to control the fade radius

//     const render = () => {
//       ctx.clearRect(0, 0, width, height);

//       for (let y = 0; y < height; y += 10) { // Adjust step to match font size
//         for (let x = 0; x < width; x += 10) { // Adjust step to match font size
//           const angleX = (x / width) * Math.PI * 2 * 0.1; // Increased scaling factor
//           const angleY = (y / height) * Math.PI * 2 * 0.1; // Increased scaling factor
//           const value = simplex(Math.cos(angleX), Math.sin(angleX), Math.cos(angleY), Math.sin(angleY) + time);
//           const brightness = Math.floor((value + 1) * 127.5); // Normalize value to [0, 255]
//           const charIndex = Math.floor((value + 1) / 2 * (charArray.length - 1));
//           const char = charArray[charIndex];

//           // Calculate distance from the edges of the middle rectangle
//           const dx = Math.max(Math.abs(x - centerX) - rectWidth / 2, 0);
//           const dy = Math.max(Math.abs(y - centerY) - rectHeight / 2, 0);
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           // Adjust brightness based on distance
//           const fadeFactor = Math.min(1, distance / fadeRadius);
//           const adjustedBrightness = brightness * fadeFactor; // Quadratic fade

//           ctx.fillStyle = `rgb(${adjustedBrightness}, ${adjustedBrightness}, ${adjustedBrightness})`;
//           ctx.fillText(char, x, y + 20); // Adjust position to match font size
//         }
//       }

//       time += 0.001; // Slower increment to create a slower animation
//       requestAnimationFrame(render);
//     };

//     render();
//   }, []);

//   return <canvas ref={canvasRef} style={{ position: 'absolute', top: -10, left: 0, zIndex: -1 }} />;
// };

// export default AsciiBackground;