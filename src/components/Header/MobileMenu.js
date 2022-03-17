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
      initial={{ clipPath: "circle(0px at 95% -10%)" }}
      animate={{ clipPath: "circle(1200px at 90% -10%)" }}
      exit={{ clipPath: "circle(0px at 95% -10%)" }}
      transition={{ duration: 0.7 }}
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
      </MobileMenuWrap>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
