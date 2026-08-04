const dark = true;
// Use oklch for consistent color production when editing colors programmatically
// Default color is for dark mode. Switching to light mode should concur a decrease of lightness and chroma
// oklch(L: Lightness[0 - 1] C: Chroma[0 - 0.4] H: Hue[0 - 360 degrees] / a: Alpha [0 - 1]) -> oklch(0.1 0.1 20 / 0.2) oklch (L C H / A)
const darkTheme = {
  primary: "oklch()",
  background: "oklch()",
  foreground: "oklch()",
  accent: "oklch()"
}

const lightTheme = {
  primary: "oklch()",
  background: "oklch()",
  foreground: "oklch()",
  accent: "oklch()"
}
export const themeColors = dark ? darkTheme : lightTheme;
