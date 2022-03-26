import React from "react";
import { Theme } from "./components/Theme";
import { PagesContainer } from "./components/PagesContainer.js";
import { Container } from "./components/Container.js";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Cursor from "./components/Cursor";
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
