import { ThemedStyledProps } from "styled-components";

export interface ThemeInterface {
  primary: string;
  secondary: string;

  borderPrimary: string;

  fontPrimary: string;
}

export type ThemedProps<P> = ThemedStyledProps<P, ThemeInterface>;

const theme = {
  primary: "#eee",
  secondary: "#aaa",
  white: "#fff",

  borderPrimary: "#eee",

  // Fonts
  fontPrimary: "Montserrat, sans-serif",

  // Grid styled
  space: [0, 6, 12, 18, 24],
  fontSizes: ["1.2rem", "1.6rem", "2rem", "2.4rem"],
  breakpoints: ["32em", "48em", "64em"]
};

export default theme;
