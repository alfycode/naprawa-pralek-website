import React from "react";
import {
  MobileMenuContainer,
  MobileMenuWrap,
  NavItem,
  StyledLink,
} from "./MobileMenuElements";
const MobileMenu = ({ setIsOpenHandler }, ref) => {
  return (
    <MobileMenuContainer
      ref={ref}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.5 }}
    >
      <MobileMenuWrap
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 0.3, delay: 0.4 }}
      >
        <NavItem>
          <StyledLink onClick={setIsOpenHandler} to="/">
            Strona Główna
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink onClick={setIsOpenHandler} to="/">
            O firmie
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink onClick={setIsOpenHandler} to="/">
            Usługi
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink onClick={setIsOpenHandler} to="/">
            Kontakt
          </StyledLink>
        </NavItem>
      </MobileMenuWrap>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
