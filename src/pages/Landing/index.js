import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import BigLogo from "../../img/bigLogo.svg";
import ScrollLogo from "../../img/scroll_icon.svg";
import { Container } from "../../components/Container";
import {
  StyledContentContainer,
  StyledTextContentContainer,
  StyledImage,
  StyledScrollIcon,
  StyledTextWrapper,
  StyledCompanyNameWrapper,
  StyledTitle,
  StyledSubTitle,
  StyledPhoneHoursContainer,
  StyledHoursContainer,
  StyledClockLogo,
  StyledHours,
  StyledPhoneContainer,
  StyledPhoneLogo,
  StyledPhone,
} from "./LandingElements";
const LandingPage = () => {
  return (
    <Container vh landing bgColor>
      <StyledContentContainer name="top">
        <StyledImage src={BigLogo} alt="naprawiamy-pralki-img" />
        <StyledTextContentContainer>
          <StyledTextWrapper>
            <StyledCompanyNameWrapper>
              <StyledTitle>Naprawa</StyledTitle>
              <StyledTitle nowrap>pralek i AGD</StyledTitle>
            </StyledCompanyNameWrapper>
            <StyledSubTitle>Szalast Zenon</StyledSubTitle>
          </StyledTextWrapper>
          <StyledPhoneHoursContainer>
            <StyledHoursContainer>
              <StyledClockLogo>
                <BiTime />
              </StyledClockLogo>
              <StyledHours>8:00 - 21:00</StyledHours>
            </StyledHoursContainer>
            <StyledPhoneContainer href="tel:+48603663053">
              <StyledPhoneLogo>
                <BsTelephone />
              </StyledPhoneLogo>
              <StyledPhone>+48 603 663 053</StyledPhone>
            </StyledPhoneContainer>
          </StyledPhoneHoursContainer>
        </StyledTextContentContainer>
      </StyledContentContainer>
      <StyledScrollIcon src={ScrollLogo}></StyledScrollIcon>
    </Container>
  );
};

export default LandingPage;
