import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { theme } from '../../helpers/theme';
import { motion } from 'framer-motion';
export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2em;
	z-index: 995;
	overflow: hidden;
	background-color: ${(props) => (props.visible ? '#dedeed' : 'transparent')};
	box-shadow: ${(props) =>
		props.visible === true ? '0px 1px 15px -10px #333' : 'none'};
	transition: all 0.2s ease-in-out;
`;
export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: none;
`;
export const LogoType = styled(motion.img)`
	height: 40px;
	&:active {
		background-color: ${theme.colors.lightBlue};
	}
`;
export const NavContainer = styled.li`
	display: flex;
	justify-content: center;
	gap: 1.5em;
	list-style: none;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const NavLink = styled(LinkS)`
	color: ${(props) => props.theme.colors.dark};
	font-size: ${(props) => props.theme.fontSizes.small};
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	box-sizing: border-box;
	&:active {
		color: ${theme.colors.darkBlue};
	}
	&:hover {
		color: #000;
	}
	&:after {
		content: '';
		height: 3px;
		display: block;
		position: relative;
		left: 50%;
		bottom: 0;
		background: ${theme.colors.darkBlue};
		transition: width 0.2s ease 0s, left 0.2s ease 0s;
		width: 0;
	}
	&.active {
		color: #000;
		&:after {
			width: 100%;
			left: 0;
		}
	}
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
	cursor: none;
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
		props.isOpen === true ? 'transparent' : '#333'};
	border-radius: 5px;
	transition: all 0.5s ease-in-out;
	transform: translate(
		${(props) => (props.isOpen === true ? '-50px, 0px' : '0px, 0px;')}
	);
	&:after,
	&:before {
		content: '';
		position: absolute;
		width: 38px;
		height: 5px;
		background-color: ${theme.colors.dark};
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
	}
	&:after {
		transform: translate(
				${(props) => (props.isOpen === true ? '50px, 0px' : '0px, 10px')}
			)
			rotate(${(props) => (props.isOpen === true ? '45deg' : '0deg')});
	}
	&:before {
		transform: translate(
				${(props) => (props.isOpen === true ? '50px, 0px' : '0px, -10px')}
			)
			rotate(${(props) => (props.isOpen === true ? '-45deg' : '0deg')});
	}
`;
