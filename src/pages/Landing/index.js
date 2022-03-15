import React from "react";
import {BsTelephone} from "react-icons/bs";
import {BiMap, BiTime} from "react-icons/bi";
import BigLogo from "../../img/bigLogo.svg";
import {Container} from "../../components/Container";
import {
  StyledContentContainer,
  StyledImage,
  StyledTextWrapper,
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
    <Container landing bgColor>
      <StyledContentContainer>
        <StyledImage src={BigLogo} alt='naprawiamy-pralki-img' />
        <StyledTextWrapper>
          <StyledTitle>Naprawa pralek i AGD</StyledTitle>
          <StyledSubTitle>Szalast Zenon</StyledSubTitle>
        </StyledTextWrapper>
        <StyledPhoneHoursContainer>
          <StyledHoursContainer>
            <StyledClockLogo>
              <BiTime />
            </StyledClockLogo>
            <StyledHours>8:00 - 21:00</StyledHours>
          </StyledHoursContainer>
          <StyledPhoneContainer href='tel:+48603663053'>
            <StyledPhoneLogo>
              <BsTelephone />
            </StyledPhoneLogo>
            <StyledPhone>+48 663 682 480</StyledPhone>
          </StyledPhoneContainer>
        </StyledPhoneHoursContainer>
      </StyledContentContainer>
    </Container>
  );
};

export default LandingPage;
