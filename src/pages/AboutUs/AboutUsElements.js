import styled from "styled-components";

export const AboutUsContentWrap = styled.div`
  background-color: ${(props) => (props.second ? "cadetblue" : "gray")};
  /* min-height: 100vh; */
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3em;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
  @media screen and (min-width: 960px) {
    width: ${(props) => (props.right ? "60%" : "40%")};
  }
`;
export const AboutUsTitle = styled.h2`
  width: 80%;
  font-size: 5em;
  font-weight: 800;
  text-align: center;
  line-height: 1em;
  color: #333;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  padding-bottom: 0.5em;
  /* background-color: red; */
  @media screen and (min-width: 768px) {
    font-size: 6em;
  }
  @media screen and (min-width: 960px) {
    width: ${(props) => (props.right ? "fit-content" : "80%")};
    font-size: ${(props) => (props.right ? "2.5em" : "2.2em")};
    text-align: left;
    padding-top: 100px;
  }
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
  @media screen and (min-width: 960px) {
    font-size: 1.4em;
    text-align: left;
    padding: 1em;
  }
`;
export const AboutUsOpinionsWrap = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
  @media screen and (min-width: 960px) {
    gap: 1.5em;
  }
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

  @media screen and (min-width: 960px) {
    gap: 1em;
    flex-direction: row;
    padding: 1em;
  }
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
  text-align: center;
  @media screen and (min-width: 960px) {
    text-align: left;
  }
`;
export const ClientNameText = styled.h3`
  font-size: 1.8em;
  color: #333;
  @media screen and (min-width: 960px) {
    font-size: 1em;
  }
`;
export const ClientOpinionText = styled.p`
  font-size: 1.6em;
  font-weight: 500;
  color: #333;
  padding: 0.5em 0.5em 1em 0.5em;
  @media screen and (min-width: 960px) {
    font-size: .9em;
  }
`;
