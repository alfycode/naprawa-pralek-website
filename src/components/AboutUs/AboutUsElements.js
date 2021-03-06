import styled from 'styled-components';
import { theme } from '../../helpers/theme';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const AboutUsContentWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 3em;
	margin-bottom: 5em;
	z-index: 10;
	padding: 0;
	@media screen and (min-width: 768px) {
		width: 70%;
	}
	@media screen and (min-width: 960px) {
		width: ${(props) => (props.right ? '50%' : '50%')};
	}
`;
export const AboutUsTitle = styled(motion.h2)`
	// width: ${(props) => (props.serv ? '300px' : '250px')};
	font-size: 2rem;
	font-weight: 800;
	text-align: center;
	line-height: 1.1em;
	color: ${theme.colors.dark};
	text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	padding-top: ${(props) => (props.serv ? '0' : '0.5em')};
	@media screen and (min-width: 550px) {
		// width: ${(props) => (props.serv ? '400px' : '350px')};
	}
	@media screen and (min-width: 960px) {
		// width: ${(props) => (props.right ? 'fit-content' : '350px')};
		font-size: 2rem;
		text-align: ${(props) => [props.serv ? 'center' : 'left']};
		padding-top: ${(props) => (props.serv ? '0' : '100px')};
	}
	@media screen and (min-width: 1280px) {
		// width: ${(props) => (props.right ? 'fit-content' : '490px')};
		font-size: 2.5rem;
	}
	@media screen and (min-width: 1600px) {
		// width: ${(props) => (props.right ? 'fit-content' : '550px')};
		font-size: 3rem;
	}
	@media screen and (min-width: 1920px) {
		// width: ${(props) => (props.right ? 'fit-content' : '600px')};
		font-size: 3.25rem;
	}
	@media screen and (min-width: 2300px) {
		// width: ${(props) => (props.right ? 'fit-content' : '700px')};
		font-size: 3.5rem;
	}
`;
export const TitleSpan = styled.span`
	color: ${(props) => (props.blue ? theme.colors.darkBlue : '#fff')};
`;
export const AboutUsText = styled(motion.p)`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 400;
	font-size: 1.25rem;
	line-height: 2rem;
	text-align: center;
	text-shadow: 0px 0px px rgba(0, 0, 0, .1);
	color: #fff;
	// width: 90%;
	@media screen and (min-width: 960px) {
		font-size: 1.25rem;
		// margin-top: 1em;
		text-align: left;
		padding-right: 2rem;
	}
	@media screen and (min-width: 1280px) {
		font-size: 1.5rem;
	}
	@media screen and (min-width: 1600px) {
		font-size: 1.75rem;
	}
`;
export const AboutUsOpinionsWrap = styled.div`
	height: 70%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3em;
	// @media screen and (min-width: 768px) {
	//  width: 100%;
	// }
	@media screen and (min-width: 960px) {
		gap: 1em;
		// align-items: flex-start;
	}
`;
export const AboutUsOpinionContainer = styled(motion.div)`
	height: fit-content;
	width: min(872px, 80%);
	border-radius: 10px;
	padding: 1.5em;
	background-color: rgba(250, 252, 254, 0.75);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2em;
	// @media screen and (min-width: 550px) {
	//   width: 75%;
	// }
	@media screen and (min-width: 960px) {
		// width: 90%;
		gap: 1em;
		flex-direction: row;
		padding: 0.8em;
	}
`;
export const ClientProfilePicture = styled.img`
	min-width: 60px;
	width: 30%;
	max-width: 120px;
	aspect-ratio: 1 / 1;
	border-radius: 100%;
	background-color: #fff;

	@media screen and (orientation: landscape) {
		max-width: 80px;
	}
`;
export const ClientOpinionTextWrap = styled.div`
	width: 90%;
	text-align: center;
	@media screen and (min-width: 960px) {
		text-align: left;
	}
`;
export const ClientNameText = styled.h3`
	font-size: 1.8em;
	color: #333;
	@media screen and (min-width: 960px) {
		font-size: 0.8em;
	}
`;
export const ClientOpinionText = styled.p`
	font-size: 1.6em;
	font-weight: 500;
	color: #333;
	padding: 0.5em 0.5em 1em 0.5em;
	@media screen and (min-width: 960px) {
		font-size: 0.75em;
	}
`;

export const TextParagraph = styled.p`
	text-indent: 5%;
	margin-bottom: 10px;
`;

export const OpinionsLink = styled(Link)`
	margin-inline: auto;
	align-self: center;
	
`;

export const GoogleWebsiteButton = styled.button`
	justify-self: center;
	background: transparent;
	border: 5px solid #cee5f5;
	border-radius: 10px;
	font-weight: 700;
	cursor: none;
	color: white;
	padding: 1em 1.5em;
	margin-top: 10px;
	font-size: 1rem;
	text-transform: uppercase;
	transition: 0.5s ease-in-out;

	&:hover {
		transform: scale(1.02);
		background-color: #cee5f5;
		color: ${({theme}) => theme.colors.dark};
	}
`;
