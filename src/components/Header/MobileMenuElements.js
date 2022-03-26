import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { theme } from "../../helpers/theme";
export const MobileMenuContainer = styled(motion.nav)`
  background: ${(props) => props.theme.colors.menuLinear};
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
export const MobileMenuWrap = styled(motion.ul)`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;
export const NavItem = styled(motion.li)`
  list-style: none;
`;
export const StyledLink = styled(Link)`
  font-size: 1.5em;
  letter-spacing: 0.03em;
  color: ${theme.colors.dark};
  cursor: pointer;
  
  &:active {
    color: ${theme.colors.darkBlue};
  }
`;
