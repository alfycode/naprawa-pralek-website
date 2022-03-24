import React from "react";
import { Container } from "../../components/Container";
import { TitleSpan, AboutUsTitle } from "../AboutUs/AboutUsElements";
import Phone from "../../img/phone.svg";
import Install from "../../img/install.svg";
import Book from "../../img/book.svg";
import Repair from "../../img/repair.svg";
import Diagnose from "../../img/diagnose.svg";
import {
  ServicesRow,
  ServiceItem,
  ServiceText,
  ServiceItemBorder,
  ServiceItemIcon,
} from "./ServicesElements";

const ServicesPage = () => {
  return (
    <Container bgColor service name="services">
      <ServicesRow>
        <ServiceItem text>
          <AboutUsTitle service>
            Jakie <TitleSpan blue>usługi </TitleSpan>oferujemy?
          </AboutUsTitle>
          <ServiceText text>
            Szalast Z. Naprawa i serwis pralek automatycznych.
          </ServiceText>
        </ServiceItem>
        <ServiceItem
          whileHover={{ scale: 0.98, rotate: -5 }}
          whileTap={{ scale: 1.02 }}
        >
          <ServiceItemIcon src={Phone} />
          <ServiceText>porady telefoniczne</ServiceText>
          <ServiceItemBorder
            whileHover={{ rotate: 5 }}
            style={{ rotate: -5 }}
          />
        </ServiceItem>
        <ServiceItem
          whileHover={{ scale: 0.98, rotate: -5 }}
          whileTap={{ scale: 1.02 }}
        >
          <ServiceItemIcon src={Install} />
          <ServiceText>instalacja nowo zakupionego sprzętu</ServiceText>
          <ServiceItemBorder
            whileHover={{ rotate: 5 }}
            style={{ rotate: -5 }}
          />
        </ServiceItem>
      </ServicesRow>
      <ServicesRow second>
        <ServiceItem
          whileHover={{ scale: 0.98, rotate: -5 }}
          whileTap={{ scale: 1.02 }}
        >
          <ServiceItemIcon src={Book} />
          <ServiceText>doradztwo w zakresie obsługi</ServiceText>
          <ServiceItemBorder
            whileHover={{ rotate: 5 }}
            style={{ rotate: -5 }}
          />
        </ServiceItem>
        <ServiceItem
          whileHover={{ scale: 0.98, rotate: -5 }}
          whileTap={{ scale: 1.02 }}
        >
          <ServiceItemIcon src={Repair} />
          <ServiceText>naprawa pralek wszystkich frim</ServiceText>
          <ServiceItemBorder
            whileHover={{ rotate: 5 }}
            style={{ rotate: -5 }}
          />
        </ServiceItem>
        <ServiceItem
          whileHover={{ scale: 0.98, rotate: -5 }}
          whileTap={{ scale: 1.02 }}
        >
          <ServiceItemIcon src={Diagnose} />
          <ServiceText>diagnoza usterek</ServiceText>
          <ServiceItemBorder
            whileHover={{ rotate: 5 }}
            style={{ rotate: -5 }}
          />
        </ServiceItem>
      </ServicesRow>
    </Container>
  );
};

export default ServicesPage;
