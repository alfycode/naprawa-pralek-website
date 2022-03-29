import React from "react";
import "./AboutUsElements";
import { Container } from "../../components/Container";
import opinionOne from "../../img/opinionOne.png";
import opinionTwo from "../../img/opinionTwo.png";
import opinionThree from "../../img/opinionThree.jpg";
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
import { Bubble } from "../Landing/LandingElements";
import { theme } from "../../helpers/theme";
const AboutUsPage = () => {
  return (
    <Container vh name="aboutUs">
      <AboutUsContentWrap>
        <AboutUsTitle>
          Dlaczego <TitleSpan>warto nas</TitleSpan> wybrać?
        </AboutUsTitle>
        <AboutUsText
          style={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
          viewport={{ once: true }}
        >
          Zajmuję się naprawą pralek wszystkich typów już od 25 lat. 23-letnie
          doświadczenie, najwyższa jakość usług w zakresie napraw pralek.
          Naprawy wykonuję na terenie Lublina i dalszych okolic, w domu klienta.
          Naprawiam moduły elektroniczne sterujące pralką (sterowniki). Posiadam
          szerokie grono zaufanych klientów.
        </AboutUsText>
      </AboutUsContentWrap>
      <AboutUsContentWrap second right="true">
        <AboutUsTitle right="true">
          Opinie naszych <TitleSpan second>klientów</TitleSpan>
        </AboutUsTitle>
        <AboutUsOpinionsWrap>
          <AboutUsOpinionContainer
            style={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.01 }}
            viewport={{ once: true }}
          >
            <ClientProfilePicture src={opinionOne} />
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
          <AboutUsOpinionContainer
            style={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.01 }}
            viewport={{ once: true }}
          >
            <ClientProfilePicture src={opinionTwo} />
            <ClientOpinionTextWrap>
              <ClientNameText>Monika Zawadzka</ClientNameText>
              <ClientOpinionText>
                Zdecydowanie polecam. Fachowy, szybki sprawny serwis w dobrej
                cenie! Pan Zenon pojawił sie bardzo punktualnie, zadzwoniłam
                rano, a już po południu miałam naprawioną pralkę.
              </ClientOpinionText>
            </ClientOpinionTextWrap>
          </AboutUsOpinionContainer>
          <AboutUsOpinionContainer
            style={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.7 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.01 }}
            viewport={{ once: true }}
          >
            <ClientProfilePicture src={opinionThree} />
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
      <Bubble white bgc={theme.colors.bubbleWhite} top={"-10%"} left={"-5%"} />
      <Bubble
        white
        second
        bgc={theme.colors.bubbleWhite}
        top={"52%"}
        left={"80%"}
      />
    </Container>
  );
};

export default AboutUsPage;
