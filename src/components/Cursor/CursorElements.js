import styled from "styled-components";
import { theme } from "../../helpers/theme";
export const CustomCursor = styled.div`
  display: none;
  width: ${(props) => (props.second ? "2.25em" : "1em")};
  height: ${(props) => (props.second ? "2.25em" : "1em")};
  border-radius: 50%;
  background-color: ${(props) =>
    props.second ? "transparent" : theme.colors.dark};
  backdrop-filter: ${(props) => (props.second ? "blur(2px)" : "none")};
  border: 3px solid ${theme.colors.dark};
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  z-index: ${(props) => (props.second ? "998" : "999")};
  transition: 0.1s linear;
  transition-property: ${(props) =>
    props.second ? "all" : "border, background-color"};

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
