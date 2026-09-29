/**
 * We've Got Rhythm - Shared Tailwind Configuration
 * Configures colors, typography scales, border radius, and spacing.
 */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#9f0f18",
        "primary-container": "#c22d2d",
        "on-primary": "#ffffff",
        "on-primary-container": "#ffdfdc",
        "primary-fixed": "#ffdad6",
        "primary-fixed-dim": "#ffb3ad",
        "on-primary-fixed-variant": "#930111",
        "inverse-primary": "#ffb3ad",

        "secondary": "#665c5c",
        "secondary-container": "#eddfdf",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#6c6262",
        "secondary-fixed": "#eddfdf",
        "secondary-fixed-dim": "#d1c3c3",

        "tertiary": "#4d4f50",
        "on-tertiary": "#ffffff",

        "background": "#fff8f5",
        "on-background": "#2e1500",

        "surface": "#fff8f5",
        "surface-bright": "#fff8f5",
        "surface-dim": "#ffd1ac",
        "surface-variant": "#ffdcc1",
        "on-surface": "#2e1500",
        "on-surface-variant": "#5a403e",
        "surface-tint": "#b62326",
        "inverse-surface": "#4c2700",
        "inverse-on-surface": "#ffeee2",

        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#fff1e8",
        "surface-container": "#ffeadb",
        "surface-container-high": "#ffe3ce",
        "surface-container-highest": "#ffdcc1",

        "outline": "#8e706d",
        "outline-variant": "#e2beba",

        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "24px",
        unit: "8px",
        "section-gap": "36px",
        "margin-edge": "48px",
        "container-max": "1280px"
      },
      fontFamily: {
        "headline-xl": ["Noto Serif", "Georgia", "serif"],
        "headline-lg": ["Noto Serif", "Georgia", "serif"],
        "headline-md": ["Noto Serif", "Georgia", "serif"],
        "body-lg": ["IBM Plex Sans", "sans-serif"],
        "body-md": ["IBM Plex Sans", "sans-serif"],
        "label-sm": ["Manrope", "sans-serif"]
      },
      fontSize: {
        "headline-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["2rem", { lineHeight: "1.3", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        "label-sm": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "700" }]
      }
    }
  }
};
