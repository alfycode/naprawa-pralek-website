import styled from "styled-components";

export const Container = styled.div`
  position: static;
  top: 0;
  left: 0;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  background: ${(props) =>
    props.bgColor ? props.theme.colors.whiteLinear : "#4faae7"};
  padding-top: ${(props) => (props.landing ? "80px" : "0")};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-size: 20px;
  @media screen and (max-width: 1600px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 16px;
  }
  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
  }
  @media screen and (max-width: 550px) {
    font-size: 10px;
  }
`;
