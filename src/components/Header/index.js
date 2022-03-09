import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LogoSrc from "../../img/logoType.svg";
import {
  HeaderContainer,
  LogoContainer,
  LogoType as LogoType,
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
  const redirectToHomePageHandler = () => {
    setisOpen(false);
    // here it we should use react scroll to scroll to home page
  };
  return (
    <HeaderContainer>
      <LogoContainer onClick={redirectToHomePageHandler}>
        <LogoType src={LogoSrc} />
      </LogoContainer>
      <NavContainer>
        <NavLink>O firmie</NavLink>
        <NavLink>Usługi</NavLink>
      </NavContainer>
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
