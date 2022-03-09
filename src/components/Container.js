import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: ${(props) => (props.color ? props.theme.colors.whiteLinear : "#555")};
`;
