import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Container } from "../../components/Container";
import Logo from "./logo";
import { theme } from "../../helpers/theme";
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
  ScrollIconWrap,
  Bubble,
  BubbleWrap,
} from "./LandingElements";
const LandingPage = () => {
  return (
    <Container vh landing bgColor name="top">
      <StyledContentContainer>
        <Logo />
        <StyledTextContentContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
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
              <StyledHours>9:00 - 18:00</StyledHours>
            </StyledHoursContainer>
            <StyledPhoneContainer
              href="tel:+48603663053"
              whileHover={{ scale: 0.97 }}
            >
              <StyledPhoneLogo>
                <BsTelephone />
              </StyledPhoneLogo>
              <StyledPhone>+48 603 663 053</StyledPhone>
            </StyledPhoneContainer>
          </StyledPhoneHoursContainer>
        </StyledTextContentContainer>
      </StyledContentContainer>
      <ScrollIconWrap
        animate={{
          y: -50,
          opacity: [1, 0.5],
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
          },
        }}
      >
        <StyledScrollIcon src={"/img/scroll_icon.svg"} alt="scroll icon" />
      </ScrollIconWrap>
      <BubbleWrap>
        <Bubble landing bgc={theme.colors.darkBlue} />
      </BubbleWrap>
      <BubbleWrap second>
        <Bubble second landing bgc={theme.colors.darkBlue} />
      </BubbleWrap>
    </Container>
  );
};

export default LandingPage;
