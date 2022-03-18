import React from "react";
import { Container } from "../../components/Container";
import { ServicesRow, ServiceItem } from "./ServicesElements";

const ServicesPage = () => {
  return (
    <Container bgColor>
      <ServicesRow>
        <ServiceItem></ServiceItem>
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
