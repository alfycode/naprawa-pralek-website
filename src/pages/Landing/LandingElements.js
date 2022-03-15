import styled from "styled-components";

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  max-width: 80vw;
  max-height: 40vh;
  margin-bottom: 20px;
`;

// export const StyledInfoContainer = styled.div`
//   width: 200px;
//   padding: 1.5em 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-size: 0.713em;
//   margin-top: 25px;
//   background-color: rgba(79, 170, 231, 0.25);
//   position: relative;

//   &::after {
//     content: "";
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     border: 5px dashed #4faae7;
//     transform: rotate(-5deg);
//   }
// `;

// export const StyledInfoWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   gap: 0.5em;
// `;

// export const StyledInfo = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 0.2em;
// `;

export const StyledTextWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledTitle = styled.h1`
  font-size: 4em;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-weight: 600;
`;

export const StyledSubTitle = styled.h2`
  font-size: 3em;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-weight: 600;
`;

export const StyledPhoneHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2em;
  align-items: center;
  width: 80vw;
`;

export const StyledHoursContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const StyledPhoneContainer = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(79, 170, 231, 0.25);
  border: 5px solid #cee5f5;
  border-radius: 100px;
  line-height: 180%;
  width: 100%;
  font-weight: 500;
  cursor: pointer;

  color: inherit;
  text-decoration: inherit;
`;

export const StyledHours = styled.div``;
export const StyledPhone = styled.div``;

export const StyledPhoneLogo = styled.div`
  display: flex;
  margin-right: 0.2em;
`;
export const StyledClockLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.4em;
`;
