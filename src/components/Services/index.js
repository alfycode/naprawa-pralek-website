import React from "react";
import { Container } from "../../components/Container";
import { TitleSpan, AboutUsTitle } from "../AboutUs/AboutUsElements";
import {
  ServicesRow,
  ServiceItem,
  ServiceText,
  ServiceItemBorder,
  ServiceItemIcon,
} from "./ServicesElements";
import { Bubble } from "../Landing/LandingElements";
import { theme } from "../../helpers/theme";
const ServicesPage = () => {
  return (
    <Container bgColor serv='true' name='services'>
      <ServicesRow>
        <ServiceItem
          text='true'
          style={{ scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.1, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <AboutUsTitle serv='true'>
            Jakie <TitleSpan blue>usługi </TitleSpan>oferujemy?
          </AboutUsTitle>
          <ServiceText text='true' heading>
            Szalast Zenon naprawa i serwis pralek automatycznych
          </ServiceText>
        </ServiceItem>
        <ServiceItem
          style={{ scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          whileHover={{ scale: 0.98, rotate: -5 }}
          whileTap={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <ServiceItemIcon src={"/img/phone.svg"} />
          <ServiceText>porady telefoniczne</ServiceText>
          <ServiceItemBorder
            whileHover={{ rotate: 5 }}
            style={{ rotate: -5 }}
          />
        </ServiceItem>
        <ServiceItem
          style={{ scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          whileHover={{ scale: 0.98, rotate: -5 }}
          whileTap={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <ServiceItemIcon src={"/img/install.svg"} />
          <ServiceText>instalacja nowo zakupionego sprzętu</ServiceText>
          <ServiceItemBorder
            whileHover={{ rotate: 5 }}
            style={{ rotate: -5 }}
          />
        </ServiceItem>
      </ServicesRow>
      <ServicesRow second>
        <ServiceItem
          style={{ scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.4, duration: 0.5 },
          }}
          whileHover={{ scale: 0.98, rotate: -5 }}
          whileTap={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <ServiceItemIcon src={"/img/book.svg"} />
          <ServiceText>doradztwo w zakresie obsługi</ServiceText>
          <ServiceItemBorder
            whileHover={{ rotate: 5 }}
            style={{ rotate: -5 }}
          />
        </ServiceItem>
        <ServiceItem
          style={{ scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          whileHover={{ scale: 0.98, rotate: -5 }}
          whileTap={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <ServiceItemIcon src={"/img/repair.svg"} />
          <ServiceText>naprawa pralek wszystkich firm</ServiceText>
          <ServiceItemBorder
            whileHover={{ rotate: 5 }}
            style={{ rotate: -5 }}
          />
        </ServiceItem>
        <ServiceItem
          style={{ scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.6, duration: 0.5 },
          }}
          whileHover={{ scale: 0.98, rotate: -5 }}
          whileTap={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <ServiceItemIcon src={"/img/diagnose.svg"} />
          <ServiceText>diagnoza usterek</ServiceText>
          <ServiceItemBorder
            whileHover={{ rotate: 5 }}
            style={{ rotate: -5 }}
          />
        </ServiceItem>
      </ServicesRow>
      <Bubble service bgc={theme.colors.bubbleBlue} top={"5%"} left={"85%"} />
      <Bubble
        second
        service
        bgc={theme.colors.bubbleBlue}
        top={"75%"}
        left={"-5%"}
      />
    </Container>
  );
};

export default ServicesPage;
