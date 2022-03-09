import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import LogoSrc from "../../img/logoType.svg";
import {useNavigate} from "react-router-dom";
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
  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);
  const setIsOpenHandler = () => {
    setisOpen(!isOpen);
  };
  const redirectToHomePageHandler = () => {
    navigate("/");
  };
  return (
    <HeaderContainer>
      <LogoContainer onClick={redirectToHomePageHandler}>
        <LogoType src={LogoSrc} />
      </LogoContainer>
      <NavWrap>
        <NavContainer>
          <NavLink>O firmie</NavLink>
          <NavLink>Usługi</NavLink>
        </NavContainer>
      </NavWrap>
      <BurgerContainer onClick={setIsOpenHandler}>
        <Burger isOpen={isOpen} />
      </BurgerContainer>
      <AnimatePresence>{isOpen && <MobileMenu setIsOpenHandler={setIsOpenHandler} />}</AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
