import styled from "styled-components";
import { theme } from "../../helpers/theme";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";
export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-13.5%);
  z-index: 10;
`;
export const StyledTextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.dark};
  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const StyledImage = styled.img`
  max-width: 80vw;
  max-height: 40vh;
  margin-bottom: 20px;
`;
export const StyledScrollIcon = styled.img`
  width: 100%;
  height: 100%;
`;
export const StyledTextWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  padding: 0 15px;
`;
export const StyledCompanyNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1em;
  }
`;
export const StyledTitle = styled.h1`
  font-size: 4em;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  white-space: nowrap;
  @media screen and (min-width: 768px) {
    font-size: 3.2em;
  }
`;
export const StyledSubTitle = styled.h2`
  font-size: 3em;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 2.8em;
  }
`;
export const StyledPhoneHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.2em;
  align-items: center;
  justify-content: center;
  width: 80vw;
  @media screen and (min-width: 768px) {
    font-size: 1.7em;
    flex-direction: row;
  }
`;
export const StyledHoursContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
export const StyledPhoneContainer = styled(motion.a)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.lightBlue};
  border: 5px solid #cee5f5;
  border-radius: 100px;
  line-height: 120%;
  font-weight: 500;
  cursor: none;
  color: inherit;
  text-decoration: inherit;
  padding: 0.6em 1.2em;
  @media screen and (min-width: 768px) {
    background-color: transparent;
    border: none;
    cursor: none;
    padding: 0.2em 1.2em;
  }
`;
export const StyledHours = styled.div`
  white-space: nowrap;
`;
export const StyledPhone = styled.div`
  white-space: nowrap;
`;
export const StyledPhoneLogo = styled.div`
  display: flex;
  margin-right: 0.2em;
`;
export const StyledClockLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.4em;
`;
export const ScrollIconWrap = styled(motion.div)`
  width: 40px;
  position: absolute;
  bottom: 10px;
`;
const bubbleAnimationLeft = keyframes`
0% {
  top: 10%;
  left: 2%;
}
20% {
  top: 20%;
  left: 7%;
}
40% {
  top: 30%;
  left: 2%;
}
60% {
  top: 25%;
  left: 5%;
}
80% {
  top: 16%;
  left: 10%;
}
100% {
  top:10%;
  left: 12%;
}
`;

const bubbleAnimationRight = keyframes`
0% {
  top: 50%;
  left: 75%;
}
20% {
  top: 45%;
  left: 77%;
}
40% {
  top: 38%;
  left: 80%;
}
60% {
  top: 40%;
  left: 76%;
}
80% {
  top: 46%;
  left: 80%;
}
100% {
  top: 45%;
  left: 74%;
}
`;
export const Bubble = styled.div`
  width: ${(props) => (props.second ? "16em" : "20em")};
  height: ${(props) => (props.second ? "19em" : "20em")};
  position: absolute;
  background-color: ${(props) =>
    props.white ? theme.colors.bubbleWhite : theme.colors.darkBlue};
  border-radius: ${(props) => (props.second ? "30%" : "50%")};
  z-index: 1;
  filter: ${(props) => (props.second ? "blur(8em)" : "blur(9em)")};
  animation-name: ${(props) =>
    props.second ? bubbleAnimationRight : bubbleAnimationLeft};
  animation-duration: ${props => props.second ? "10s" : "7s"};
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  animation-fill-mode: both;
`;
