import React from "react";
import { Theme } from "./components/Theme";
import { Container } from "./components/Container.js";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Theme>
      <Container>
        <Header />
        {/* <Landing />
        <AboutUs />
        <Services />
        <Contact /> */}
      </Container>
    </Theme>
  );
};

export default App;
