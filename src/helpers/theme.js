import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    dark: "#333",
    whiteLinear: "linear-gradient(90deg, #dde 0%, #eee 100%)",
    menuLinear: "linear-gradient(40deg, #9FD9FF 0%, #fff 100%)",
    lightBlue: "rgba(79, 170, 231, 0.25)",
    darkBlue: "#4FAAE7",
    bubbleWhite: "rgba(255, 255, 255, 0.2)",
    bubbleBlue: "rgba(79, 170, 231, 0.2)",
  },
  fonts: "Poppins",
  fontSizes: {
    small: "1em",
    medium: "1.5em",
    large: "2.25em",
  },
};
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    cursor: none;
  }
  body {
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts}, sans-serif;
    cursor: none;
  }
`;
