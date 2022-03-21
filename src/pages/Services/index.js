import React from "react";
import { Container } from "../../components/Container";
import { TitleSpan } from "../AboutUs/AboutUsElements";
import {
  ServicesRow,
  ServiceItem,
  ServiceTitle,
  ServiceText,
} from "./ServicesElements";

const ServicesPage = () => {
  return (
    <Container bgColor>
      <ServicesRow>
        <ServiceItem>
          <ServiceTitle>
            Jakie <TitleSpan>usługi </TitleSpan>oferujemy?
          </ServiceTitle>
          <ServiceText>
            Szalast Z. Naprawa i serwis pralek automatycznych.
          </ServiceText>
        </ServiceItem>
        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
      </ServicesRow>
      <ServicesRow second>
        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
      </ServicesRow>
    </Container>
  );
};

export default ServicesPage;
