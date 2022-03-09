import React, { useState } from "react";
import {AnimatePresence, motion } from "framer-motion";

import {
  HeaderContainer,
  LogoContainer,
  Logo,
  NavWrap,
  NavContainer,
  NavLink,
  BurgerContainer,
  Burger,
} from "./HeaderElements";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const setIsOpenHandler = () => {
    setisOpen(!isOpen);
  };
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavWrap>
        <NavContainer>
          <NavLink>O firmie</NavLink>
          <NavLink>Usługi</NavLink>
          <NavLink>Kontakt</NavLink>
        </NavContainer>
      </NavWrap>
      <BurgerContainer onClick={setIsOpenHandler}>
        <Burger isOpen={isOpen} />
      </BurgerContainer>
      <AnimatePresence>
      {isOpen && <MobileMenu setIsOpenHandler={setIsOpenHandler} />}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
