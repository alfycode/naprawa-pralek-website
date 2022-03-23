import React from "react";
import "./AboutUsElements";
import { Container } from "../../components/Container";
import {
  AboutUsContentWrap,
  AboutUsTitle,
  TitleSpan,
  AboutUsText,
  AboutUsOpinionsWrap,
  AboutUsOpinionContainer,
  ClientProfilePicture,
  ClientNameText,
  ClientOpinionTextWrap,
  ClientOpinionText,
} from "./AboutUsElements";
const AboutUsPage = () => {
  return (
    <Container vh name="aboutUs">
      <AboutUsContentWrap>
        <AboutUsTitle>
          Dlaczego <TitleSpan>warto nas</TitleSpan> wybrać?
        </AboutUsTitle>
        <AboutUsText>
          Zajmuję się naprawą pralek wszystkich typów już od 25 lat. 23-letnie
          doświadczenie, najwyższa jakość usług w zakresie napraw pralek.
          Naprawy wykonuję na terenie Lublina i dalszych okolic, w domu klienta.
          Naprawiam moduły elektroniczne sterujące pralką (sterowniki). Posiadam
          szerokie grono zaufanych klientów.
        </AboutUsText>
      </AboutUsContentWrap>
      <AboutUsContentWrap second right>
        <AboutUsTitle right>
          Opinie naszych <TitleSpan second>klientów</TitleSpan>
        </AboutUsTitle>
        <AboutUsOpinionsWrap>
          <AboutUsOpinionContainer>
            <ClientProfilePicture />
            <ClientOpinionTextWrap>
              <ClientNameText>Jan Jacek Gutowski</ClientNameText>
              <ClientOpinionText>
                Pan Zenon naprawia moje pralki od wielu lat i robi to w sposób
                profesjonalny. Oprócz szybkich i sprawnych napraw zawsze służy
                pomocą telefoniczną i fachową poradą. Można powiedzieć że ten
                sprzęt AGD jest w „dobrych rękach”.
              </ClientOpinionText>
            </ClientOpinionTextWrap>
          </AboutUsOpinionContainer>
          <AboutUsOpinionContainer>
            <ClientProfilePicture />
            <ClientOpinionTextWrap>
              <ClientNameText>Monika Zawadzka</ClientNameText>
              <ClientOpinionText>
                Zdecydowanie polecam. Fachowy, szybki sprawny serwis w dobrej
                cenie! Pan Zenon pojawił sie bardzo punktualnie, zadzwoniłam
                rano, a już po południu miałam naprawioną pralkę.
              </ClientOpinionText>
            </ClientOpinionTextWrap>
          </AboutUsOpinionContainer>
          <AboutUsOpinionContainer>
            <ClientProfilePicture />
            <ClientOpinionTextWrap>
              <ClientNameText>Piotr Wybraniec</ClientNameText>
              <ClientOpinionText>
                Bardzo szybka naprawa i pełny profesjonalizm. Na pralkach
                Electrolux-a zna sie doskonale, co jest rzadkością w Lublinie. Z
                całą pewnością polecam i dziękuję.
              </ClientOpinionText>
            </ClientOpinionTextWrap>
          </AboutUsOpinionContainer>
        </AboutUsOpinionsWrap>
      </AboutUsContentWrap>
    </Container>
  );
};

export default AboutUsPage;
