import React from "react";
import { PagesContainer } from "../components/PagesContainer.js";
import Header from "../components/Header";
import Landing from "../components/Landing";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Cursor from "../components/Cursor";
import { Theme } from "../components/Theme.js";
const App = () => {
  return (
    <Theme>
      <PagesContainer>
        <Cursor />
        <Header />
        <Landing />
        <AboutUs />
        <Services />
      </PagesContainer>
    </Theme>
  );
};

export default App;
