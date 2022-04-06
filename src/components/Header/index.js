import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoSrc from "../..";
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
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <HeaderContainer bgColor visible={scrollNav}>
      <LogoContainer
        className='link'
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => {
          scroll.scrollToTop();
          {
            if (isOpen) setIsOpenHandler();
          }
        }}
      >
        <LogoType whileHover={{ scale: 1.1 }} src={"/img/logoType.svg"} />
      </LogoContainer>
      <NavContainer>
        <NavLink
          className='link'
          spy={true}
          offset={-80}
          smooth={true}
          duration={500}
          activeClass='active'
          to='aboutUs'
        >
          O firmie
        </NavLink>
        <NavLink
          className='link'
          spy={true}
          offset={-80}
          smooth={true}
          duration={500}
          activeClass='active'
          to='services'
        >
          Usługi
        </NavLink>
      </NavContainer>
      <BurgerWrap className='link'>
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
