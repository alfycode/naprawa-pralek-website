import styled from "styled-components";

export const AboutUsContentWrap = styled.div`
  /* background-color: ${(props) => (props.second ? "cadetblue" : "gray")}; */
  min-height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
`;
export const AboutUsTitle = styled.h2`
  font-size: 5em;
  font-weight: 800;
  text-align: center;
  line-height: 1em;
  color: #333;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  padding-bottom: 0.5em;
`;
export const TitleSpan = styled.span`
  color: #fff;
`;
export const AboutUsText = styled.p`
  font-weight: 700;
  font-size: 2.4em;
  line-height: 1.3em;
  text-align: center;
  color: #fff;
`;
export const AboutUsOpinionsWrap = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3em;
`;
export const AboutUsOpinionContainer = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 872px;
  border-radius: 10px;
  padding: 1.5em;
  background-color: rgba(250, 252, 254, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;
export const ClientProfilePicture = styled.div`
  min-width: 80px;
  width: 30%;
  max-width: 140px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  background-color: #fff;
`;
export const ClientOpinionTextWrap = styled.div`
  font-size: 1.8em;
  text-align: center;
`;
export const ClientNameText = styled.h3`
  font-size: 1em;
  color: #333;
`;
export const ClientOpinionText = styled.p`
  text-align: center;
  font-size: 0.9em;
  font-weight: 500;
  color: #333;
`;
