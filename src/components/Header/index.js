import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoSrc from "../../img/logoType.svg";
import { animateScroll as scroll } from "react-scroll";
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
      <LogoContainer
      className="link"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => scroll.scrollToTop()}
      >
        <LogoType whileHover={{ scale: 1.1 }} src={LogoSrc} />
      </LogoContainer>
      <NavContainer>
        <NavLink
          className="link"
          spy={true}
          offset={-80}
          smooth={true}
          duration={500}
          activeClass="active"
          to="aboutUs"
        >
          O firmie
        </NavLink>
        <NavLink
          className="link"
          spy={true}
          offset={-80}
          smooth={true}
          duration={500}
          activeClass="active"
          to="services"
        >
          Usługi
        </NavLink>
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
