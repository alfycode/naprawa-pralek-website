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
        <ServiceItem>
          <ServiceItemIcon src={Phone} />
          <ServiceText>porady telefoniczne</ServiceText>
          <ServiceItemBorder />
        </ServiceItem>
        <ServiceItem>
          <ServiceItemIcon src={Install} />
          <ServiceText>instalacja nowo zakupionego sprzętu</ServiceText>
          <ServiceItemBorder />
        </ServiceItem>
      </ServicesRow>
      <ServicesRow second>
        <ServiceItem>
          <ServiceItemIcon src={Book} />
          <ServiceText>doradztwo w zakresie obsługi</ServiceText>
          <ServiceItemBorder />
        </ServiceItem>
        <ServiceItem>
          <ServiceItemIcon src={Repair} />
          <ServiceText>naprawa pralek wszystkich frim</ServiceText>
          <ServiceItemBorder />
        </ServiceItem>
        <ServiceItem>
          <ServiceItemIcon src={Diagnose} />
          <ServiceText>diagnoza usterek</ServiceText>
          <ServiceItemBorder />
        </ServiceItem>
      </ServicesRow>
    </Container>
  );
};

export default ServicesPage;
