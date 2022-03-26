import styled from "styled-components";
import { theme } from "../../helpers/theme";
export const CustomCursor = styled.div`
  display: none;
  width: ${(props) => (props.second ? "3.2em" : "1.7em")};
  height: ${(props) => (props.second ? "3.2em" : "1.7em")};
  border-radius: 50%;
  background-color: transparent;
  backdrop-filter: ${(props) => (props.second ? "none" : "blur(2px);")};
  border: 3px solid ${theme.colors.dark};
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  z-index: 999;
  transition: 0.2s linear;
  transition-property: ${(props) =>
    props.second ? "all" : "border, background-color"};

  @media screen and (min-width: 769px) {
    display: block;
  }
`;
