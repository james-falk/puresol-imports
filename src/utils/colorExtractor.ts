/* eslint-disable no-param-reassign, no-multi-assign, default-case */
// Advanced color extraction and palette generation utility
export interface ColorPalette {
  primary: string[];
  secondary: string[];
  accent: string[];
  neutral: string[];
}

export interface ExtractedColors {
  dominant: string;
  palette: string[];
  complementary: string[];
}

// Convert hex to HSL for better color manipulation
export const hexToHsl = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
};

// Convert HSL back to hex
export const hslToHex = (h: number, s: number, l: number): string => {
  h /= 360;
  s /= 100;
  l /= 100;

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let r;
  let g;
  let b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (c: number) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Generate a complete color palette from a base color
export const generatePalette = (baseColor: string): ColorPalette => {
  const [h, s, l] = hexToHsl(baseColor);

  // Generate primary palette (variations of the base color)
  const primary = [
    hslToHex(h, Math.max(s - 40, 10), Math.min(l + 40, 95)), // 50
    hslToHex(h, Math.max(s - 30, 15), Math.min(l + 30, 90)), // 100
    hslToHex(h, Math.max(s - 20, 20), Math.min(l + 20, 85)), // 200
    hslToHex(h, Math.max(s - 10, 25), Math.min(l + 10, 80)), // 300
    hslToHex(h, s, Math.max(l - 10, 20)), // 400
    baseColor, // 500 - base color
    hslToHex(h, Math.min(s + 10, 100), Math.max(l - 20, 15)), // 600
    hslToHex(h, Math.min(s + 20, 100), Math.max(l - 30, 10)), // 700
    hslToHex(h, Math.min(s + 30, 100), Math.max(l - 40, 8)), // 800
    hslToHex(h, Math.min(s + 40, 100), Math.max(l - 50, 5)), // 900
  ];

  // Generate secondary palette (complementary colors)
  const secondaryHue = (h + 120) % 360;
  const secondary = [
    hslToHex(secondaryHue, Math.max(s - 40, 10), Math.min(l + 40, 95)),
    hslToHex(secondaryHue, Math.max(s - 30, 15), Math.min(l + 30, 90)),
    hslToHex(secondaryHue, Math.max(s - 20, 20), Math.min(l + 20, 85)),
    hslToHex(secondaryHue, Math.max(s - 10, 25), Math.min(l + 10, 80)),
    hslToHex(secondaryHue, s, Math.max(l - 10, 20)),
    hslToHex(secondaryHue, s, l),
    hslToHex(secondaryHue, Math.min(s + 10, 100), Math.max(l - 20, 15)),
    hslToHex(secondaryHue, Math.min(s + 20, 100), Math.max(l - 30, 10)),
    hslToHex(secondaryHue, Math.min(s + 30, 100), Math.max(l - 40, 8)),
    hslToHex(secondaryHue, Math.min(s + 40, 100), Math.max(l - 50, 5)),
  ];

  // Generate accent palette (triadic colors)
  const accentHue = (h + 240) % 360;
  const accent = [
    hslToHex(accentHue, Math.max(s - 40, 10), Math.min(l + 40, 95)),
    hslToHex(accentHue, Math.max(s - 30, 15), Math.min(l + 30, 90)),
    hslToHex(accentHue, Math.max(s - 20, 20), Math.min(l + 20, 85)),
    hslToHex(accentHue, Math.max(s - 10, 25), Math.min(l + 10, 80)),
    hslToHex(accentHue, s, Math.max(l - 10, 20)),
    hslToHex(accentHue, s, l),
    hslToHex(accentHue, Math.min(s + 10, 100), Math.max(l - 20, 15)),
    hslToHex(accentHue, Math.min(s + 20, 100), Math.max(l - 30, 10)),
    hslToHex(accentHue, Math.min(s + 30, 100), Math.max(l - 40, 8)),
    hslToHex(accentHue, Math.min(s + 40, 100), Math.max(l - 50, 5)),
  ];

  // Generate neutral palette (desaturated versions)
  const neutral = [
    '#FAFAFA', // 50
    '#F5F5F5', // 100
    '#E5E5E5', // 200
    '#D4D4D4', // 300
    '#A3A3A3', // 400
    '#737373', // 500
    '#525252', // 600
    '#404040', // 700
    '#262626', // 800
    '#171717', // 900
  ];

  return { primary, secondary, accent, neutral };
};

// Generate Tailwind CSS color configuration
export const generateTailwindColors = (palette: ColorPalette) => {
  const colorSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const createColorObject = (colors: string[]) => {
    return colors.reduce(
      (acc, color, index) => {
        const step = colorSteps[index];
        if (step !== undefined) {
          acc[step] = color;
        }
        return acc;
      },
      {} as Record<number, string>,
    );
  };

  return {
    primary: createColorObject(palette.primary),
    secondary: createColorObject(palette.secondary),
    accent: createColorObject(palette.accent),
    neutral: createColorObject(palette.neutral),
  };
};

// Example usage with common brand colors
export const presetPalettes = {
  // Tech company blues
  tech: generatePalette('#0066CC'),
  // Nature/organic greens
  nature: generatePalette('#2D5016'),
  // Luxury gold/brown
  luxury: generatePalette('#B8860B'),
  // Creative purple
  creative: generatePalette('#6B46C1'),
  // Energy orange
  energy: generatePalette('#EA580C'),
};

// Function to analyze an uploaded image and extract colors
export const analyzeImageColors = async (
  imageFile: File,
): Promise<ExtractedColors> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);

      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData?.data;

      if (!data) {
        resolve({
          dominant: '#3B82F6',
          palette: ['#3B82F6', '#10B981', '#F59E0B'],
          complementary: ['#EF4444', '#8B5CF6'],
        });
        return;
      }

      // Simple color extraction algorithm
      const colorCounts: Record<string, number> = {};

      for (let i = 0; i < data.length; i += 16) {
        // Sample every 4th pixel
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const alpha = data[i + 3];

        if (
          r !== undefined &&
          g !== undefined &&
          b !== undefined &&
          alpha !== undefined &&
          alpha > 128
        ) {
          // Ignore transparent pixels
          const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
          colorCounts[hex] = (colorCounts[hex] || 0) + 1;
        }
      }

      // Get most common colors
      const sortedColors = Object.entries(colorCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
        .map(([color]) => color);

      const dominant = sortedColors[0] || '#3B82F6';
      const [h] = hexToHsl(dominant);

      resolve({
        dominant,
        palette: sortedColors.slice(0, 5),
        complementary: [
          hslToHex((h + 180) % 360, 70, 50),
          hslToHex((h + 120) % 360, 70, 50),
          hslToHex((h + 240) % 360, 70, 50),
        ],
      });
    };

    img.src = URL.createObjectURL(imageFile);
  });
};
