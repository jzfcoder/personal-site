declare module 'perlin-noise' {
    interface PerlinNoiseOptions {
      octaveCount?: number;
      amplitude?: number;
      persistence?: number;
    }
  
    function generatePerlinNoise(width: number, height: number, options?: PerlinNoiseOptions): number[];
  
    export { generatePerlinNoise };
  }