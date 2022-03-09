import React from "react";
import {Theme} from "./components/Theme";
import {Container} from "./components/Container.js";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

const App = () => {
  return (
    <Theme>
      <Container>
        <Header />
        <Landing />
        {/* <AboutUs />
          <Services /> */}
      </Container>
    </Theme>
  );
};

export default App;
