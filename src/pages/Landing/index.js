import React from 'react';
import styled from 'styled-components';
import {BsTelephone} from 'react-icons/bs'
import {BiMap, BiTime} from 'react-icons/bi'

const StyledContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 576px) {

  }

  @media only screen and (min-width: 768px) {
    
  }

  @media only screen and (min-width: 992px) {
    
  }

  @media only screen and (min-width: 1200px) {
    
  }
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid red;
  margin-bottom: 25px;
`;

const StyledInfoContainer = styled.div`
  width: 200px;
  padding: 1.5em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.713em;
  margin-top: 25px;
  background-color: rgba(79, 170, 231, 0.25);
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border: 5px dashed #4faae7;
    transform: rotate(-5deg);
  }
`;

const StyledInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;
`;

const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.2em;
`;

const StyledTextWrapper = styled.div`
  margin: 2em 0;
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-size: 2em;
`;

const StyledSubTitle = styled.h2`
  font-size: 1.75em;
`;


const LandingPage = () => {
  return (
    <StyledContainer>
      <StyledImage src='' alt='naprawiamy-pralki-img' />
      <StyledTextWrapper>
        <StyledTitle>Naprawa pralek</StyledTitle>
        <StyledSubTitle>Zenon Szalast</StyledSubTitle>
      </StyledTextWrapper>
      <StyledInfoContainer>
        <StyledInfoWrap>
          <StyledInfo>
            <BsTelephone />
            <p>+48 123 456 789</p>
          </StyledInfo>
          <StyledInfo>
            <BiMap />
            <p>ul. Harnasie 15/17</p>
          </StyledInfo>
          <StyledInfo>
            <BiTime />
            <p>8:00 - 21:00</p>
          </StyledInfo>
        </StyledInfoWrap>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

export default LandingPage;
