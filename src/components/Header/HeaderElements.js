import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 80px;
  height: 10vh;
  max-height: 120px;
  background-color: cadetblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  z-index: 999;
  overflow: hidden;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const LogoType = styled.img`
  height: 40px;
`;
export const NavWrap = styled.ul`
  display: none;
`;
export const NavContainer = styled.li``;
export const NavLink = styled.a``;
export const BurgerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 44px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  /* border: 2px solid black; */
  overflow: hidden;
  z-index: 3;
`;
export const Burger = styled.div`
  width: 38px;
  height: 5px;
  background-color: ${(props) => (props.isOpen === true ? "transparent" : "#333")};
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  transform: translate(${(props) => (props.isOpen === true ? "-50px, 0px" : "0px, 0px;")});

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 38px;
    height: 5px;
    background-color: #333;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
  &:after {
    transform: translate(${(props) => (props.isOpen === true ? "50px, 0px" : "0px, 10px")})
      rotate(${(props) => (props.isOpen === true ? "45deg" : "0deg")});
  }
  &:before {
    transform: translate(${(props) => (props.isOpen === true ? "50px, 0px" : "0px, -10px")})
      rotate(${(props) => (props.isOpen === true ? "-45deg" : "0deg")});
  }
`;
