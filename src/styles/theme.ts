import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "Sora, system-ui, sans-serif",
    heading: "Sora, Sora, system-ui, sans-serif",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  styles: {
    global: {
      "html, body": {
        background: "#000000",
      },
    },
  },
  radii: {
    sm: "5px",
    md: "8px",
  },
  fontSizes: {
    "6xl": "54px",
  },
  colors: {
    blue: {
      300: "#1475FC",
      400: "#007AFF",
      550: "#149AF8",
      900: "#142847",
    },
  },
});

export default customTheme;
