import styled from "styled-components";
import { theme } from "../../helpers/theme";
import { motion } from "framer-motion";

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-13.5%);
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
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
  padding: 0.6em 1.2em;

  @media screen and (min-width: 768px) {
    background-color: transparent;
    border: none;
    cursor: pointer;
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
