/**
 * Generates an RGB value based on a position in the rainbow.
 * @param {number} pos - The position in the rainbow.
 * @returns {{ r: number, g: number, b: number }} An object containing the RGB values.
 */
const rainbowColor = (pos: number): { r: number; g: number; b: number } => {
  const r = Math.floor(127 * Math.sin(0.024 * pos + 0) + 128);
  const g = Math.floor(127 * Math.sin(0.024 * pos + 2) + 128);
  const b = Math.floor(127 * Math.sin(0.024 * pos + 4) + 128);
  return { r, g, b };
};

/**
 * Creates the ANSI escape code for 24-bit color.
 * @param {number} r - Red component (0-255).
 * @param {number} g - Green component (0-255).
 * @param {number} b - Blue component (0-255).
 * @returns {string} The ANSI escape code for the specified 24-bit color.
 */
const rgbToAnsi24 = (r: number, g: number, b: number): string =>
  `\x1b[38;2;${r};${g};${b}m`;

const resetColor = "\x1b[0m";

/**
 * Applies a rainbow effect to the given text.
 * @param {string} text - The input text to be colored.
 * @returns {string} The text with a rainbow effect applied.
 */
export const rainbowText = (text: string): string =>
  text.split("")
    .map((char, index) => {
      const { r, g, b } = rainbowColor(index * 10);
      return rgbToAnsi24(r, g, b) + char;
    })
    .join("") + resetColor;
