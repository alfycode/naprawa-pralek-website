import React from "react";
import "./AboutUsElements";
import { Container } from "../Container";
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
  TextParagraph,
  OpinionsLink,
  GoogleWebsiteButton,
} from "./AboutUsElements";
import { Bubble } from "../Landing/LandingElements";
import { theme } from "../../helpers/theme";
import styled from 'styled-components';

const AboutUsPage = () => {
  return (
    <Container vh name='aboutUs'>
      <AboutUsContentWrap>
        <AboutUsTitle>
          Dlaczego <TitleSpan>warto </TitleSpan>nas <TitleSpan>wybrać?</TitleSpan>
        </AboutUsTitle>
        <AboutUsText
          style={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
          viewport={{ once: true }}
        >
          <TextParagraph>
            Zajmuję się naprawą pralek wszystkich firm oraz wszystkich typów od
            ponad 30 lat. Zdobyte doświadczenie przekłada się na szybką diagnozę
            usterki oraz sprawną realizację naprawy Państwa sprzętu AGD.
          </TextParagraph>
          <TextParagraph>
            O przewidywanym koszcie naprawy klient zazwyczaj dowiaduje się już
            na etapie rozmowy telefonicznej. Swoje usługi serwisowe wykonuję
            wykonuję bezpośrednio w domu klienta, więc nie muszą się Państwo
            marwić o transport pralki. Naprawy wykonuję na terenie Lublina, a
            nawet całego województwa lubelskiego.
          </TextParagraph>
          <TextParagraph>
            Naprawiam także moduły elektroniczne sterujące pralką (sterowniki),
            co pozwala na obniżenie kosztów naprawy, względem kosztów wymiany
            całego układu elektronicznego. Posiadam szerokie grono zaufanych
            klientów, którzy skorzystali już w moich usług serwisowych.
          </TextParagraph>
        </AboutUsText>
      </AboutUsContentWrap>
      <AboutUsContentWrap second right='true'>
        <AboutUsTitle right='true'>
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
            <ClientProfilePicture src={"/img/opinionOne.png"} alt='klient 1' />
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
            <ClientProfilePicture src={"/img/opinionTwo.png"} alt='klient 2' />
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
            <ClientProfilePicture
              src={"/img/opinionThree.jpg"}
              alt='klient 3'
            />
            <ClientOpinionTextWrap>
              <ClientNameText>Piotr Wybraniec</ClientNameText>
              <ClientOpinionText>
                Bardzo szybka naprawa i pełny profesjonalizm. Na pralkach
                Electrolux-a zna sie doskonale, co jest rzadkością w Lublinie. Z
                całą pewnością polecam i dziękuję.
              </ClientOpinionText>
            </ClientOpinionTextWrap>
          </AboutUsOpinionContainer>
          <OpinionsLink href={"https://g.page/r/CRNUyEpn1OkuEAE"}>
            <GoogleWebsiteButton>Profil firmy w Google</GoogleWebsiteButton>
          </OpinionsLink>
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
