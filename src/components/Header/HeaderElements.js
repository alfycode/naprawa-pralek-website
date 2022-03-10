import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 80px;
  height: 10vh;
  max-height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  z-index: 999;
  overflow: hidden;
  background-color: transparent;
  
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const LogoType = styled.img`
  height: 40px;
`;

export const NavContainer = styled.li`
  display: flex;
  justify-content: center;
  gap: 4em;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSizes.small};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;
export const BurgerWrap = styled.div``;
export const BurgerContainer = styled.div`
  position: relative;
  display: none;
  height: 35px;
  width: 44px;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  z-index: 3;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Burger = styled.div`
  width: 38px;
  height: 5px;
  background-color: ${(props) =>
    props.isOpen === true ? "transparent" : "#333"};
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  transform: translate(
    ${(props) => (props.isOpen === true ? "-50px, 0px" : "0px, 0px;")}
  );
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
    transform: translate(
        ${(props) => (props.isOpen === true ? "50px, 0px" : "0px, 10px")}
      )
      rotate(${(props) => (props.isOpen === true ? "45deg" : "0deg")});
  }
  &:before {
    transform: translate(
        ${(props) => (props.isOpen === true ? "50px, 0px" : "0px, -10px")}
      )
      rotate(${(props) => (props.isOpen === true ? "-45deg" : "0deg")});
  }
`;
