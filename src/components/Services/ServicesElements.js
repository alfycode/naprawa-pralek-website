import styled from 'styled-components';
import { theme } from '../../helpers/theme';
import { motion } from 'framer-motion';
export const ServicesRow = styled.section`
	background-color: ${theme.colors.whiteLinear};
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	gap: 6em;
	padding: 4em 0;
	flex-wrap: nowrap;
	overflow: hidden;
	@media screen and (min-width: 960px) {
		flex-direction: ${(props) => (props.second ? 'row' : 'row-reverse')};
		width: 100%;
		height: 45vh;
		padding: 0 .5em;
		gap: 2em;
	}
`;
export const ServiceItem = styled(motion.div)`
	opacity: 0;
	// min-width: 250px;
	width: min(80%, 350px);
	// max-width: ${(props) => (props.text ? '250px' : '400px')};
	position: relative;
	aspect-ratio: 1 / 0.8;
	background-color: ${(props) =>
		props.text ? 'transparent' : theme.colors.lightBlue};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: ${(props) => (props.text ? '1em 0 -2em 0' : '0')};
	z-index: 10;
	@media screen and (min-width: 960px) {
		// max-width: ${(props) => (props.text ? '250px' : '250px')};
		margin: 0;
	}
	// @media screen and (min-width: 1280px) {
	// 	max-width: 300px;
	// }
	// @media screen and (min-width: 1600px) {
	// 	max-width: 370px;
	// }
	// @media screen and (min-width: 1980px) {
	// 	max-width: 430px;
	// }
`;
export const ServiceText = styled.p`
	width: ${(props) => (props.text ? '250px' : '180px')};
	font-size: 1.75em;
	font-weight: 600;
	text-align: center;
	color: ${theme.colors.dark};
	padding-top: 1em;
	padding-bottom: ${({heading}) => heading ? '.5em' : '0'};
	@media screen and (min-width: 550px) {
		width: ${(props) => (props.text ? '300px' : '240px')};
	}
	@media screen and (min-width: 960px) {
		font-size: 1em;
		width: ${(props) => (props.text ? '300px' : '195px')};
	}
	@media screen and (min-width: 1280px) {
		width: ${(props) => (props.text ? '300px' : '220px')};
	}
	@media screen and (min-width: 1600px) {
		width: ${(props) => (props.text ? '350px' : '240px')};
	}
`;
export const ServiceItemBorder = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: 100%;
	border: 0.25em dashed ${theme.colors.darkBlue};
`;
export const ServiceItemIcon = styled.img`
	min-width: 50px;
	width: 30%;
	max-width: 100px;
`;
