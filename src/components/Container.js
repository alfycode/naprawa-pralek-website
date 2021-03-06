import styled from "styled-components";
import { theme } from "../helpers/theme";
export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-height: ${(props) => (props.vh ? "100vh" : "93vh")};
  height: fit-content;
  width: 100%;
  background: ${(props) =>
    props.bgColor ? theme.colors.whiteLinear : theme.colors.darkBlue};
  padding: ${(props) => (props.landing ? "80px" : "0")} 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  flex-wrap: wrap;
  overflow: hidden;
  @media screen and (min-width: 550px) {
    font-size: 12px;
    padding: ${(props) => (props.landing ? "80px" : "0")} 2rem 0 2rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 960px) {
    flex-direction: ${(props) => (props.serv ? "column" : "row")};
    align-items: ${(props) => (props.landing ? "center" : "flex-start")};
    justify-content: ${(props) => (props.serv ? "flex-start" : "center")};
    padding: ${(props) => (props.landing ? "80px" : "0")} 4rem 0 4rem;
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 22px;
  }
  @media screen and (min-width: 2300px) {
    font-size: 27px;
  }
`;
