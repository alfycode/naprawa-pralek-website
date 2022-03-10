import styled from "styled-components";

export const Container = styled.div`
  position: static;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background: ${(props) =>
    props.bgColor ? props.theme.colors.whiteLinear : "#555"};
  padding-top: ${(props) => (props.landing ? "80px" : "0")};
`;
