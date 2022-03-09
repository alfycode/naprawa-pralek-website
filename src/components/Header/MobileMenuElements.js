import styled from "styled-components";
import { motion } from "framer-motion";
export const MobileMenuContainer = styled(motion.nav)`
  background: ${(props) => props.theme.colors.whiteLinear};
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
  /* background-color: gray; */
  gap: 2em;
`;
export const NavItem = styled(motion.li)`
  list-style: none;
  /* background-color: cadetblue; */
`;
export const StyledLink = styled.a`
  font-size: 1.5em;
  letter-spacing: 0.03em;
  color: #333;
  cursor: pointer;
`;
