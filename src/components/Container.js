import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-height: ${props => props.landing ? "100vh" : "fit-content"};
  height: fit-content;
  width: 100%;
  background: ${(props) =>
    props.bgColor ? props.theme.colors.whiteLinear : "#4faae7"};
  padding-top: ${(props) => (props.landing ? "80px" : "0")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10px;

  @media screen and (min-width: 550px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 960px) {
    flex-direction: row;
    align-items: ${props => props.landing ? "center" : "flex-start"};
    justify-content: center;
    font-size: 15px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 19px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 21px;
  }
`;
