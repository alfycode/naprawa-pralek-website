import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LogoSrc from "../../img/logoType.svg";
import {
  HeaderContainer,
  LogoContainer,
  LogoType as LogoType,
  NavContainer,
  NavLink,
  BurgerWrap,
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

  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(scrollTop > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <HeaderContainer bgColor visible={scrolling}>
      <LogoContainer onClick={redirectToHomePageHandler}>
        <LogoType src={LogoSrc} />
      </LogoContainer>
      <NavContainer>
        <NavLink>O firmie</NavLink>
        <NavLink>Usługi</NavLink>
      </NavContainer>
      <BurgerWrap>
        <BurgerContainer onClick={setIsOpenHandler}>
          <Burger isOpen={isOpen} />
        </BurgerContainer>
      </BurgerWrap>
      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpenHandler={setIsOpenHandler} />}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
