import React from "react";
import {Theme} from "./components/Theme";
import {Container} from "./components/Container.js";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Theme>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/services' element={<Services />}></Route>
        </Routes>
      </Container>
    </Theme>
  );
};

export default App;
