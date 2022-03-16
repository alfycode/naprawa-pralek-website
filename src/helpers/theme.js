import {createGlobalStyle} from "styled-components";

export const theme = {
  colors: {
    dark: "#333",
    whiteLinear: "linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%)",
    menuLinear: "linear-gradient(40deg, #9FD9FF 0%, #fff 100%)",
    lightBlue: "rgba(79, 170, 231, 0.25)",
    darkBlue: "#4FAAE7",
    bubbleWhite: "rgba(255, 255, 255, 0.75)",
    bubbleBlue: "rgba(79, 170, 231, 0.75)",
  },
  fonts: ["Poppins", "sans-serif"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts}, sans-serif;
    src:url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
  }
`;
