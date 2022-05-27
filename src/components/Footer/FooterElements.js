import styled from 'styled-components';
import { Container } from '../Container';
import { LogoType } from '../Header/HeaderElements';
import { BsGoogle, BsFacebook, BsTelephone } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';

export const StyledContainer = styled(Container)`
	min-height: 100px;
	align-items: center;
	justify-content: center;
	padding: 1.5rem 0;
	color: white;
	row-gap: 1.75rem;

	@media screen and (min-width: 960px) {
		flex-direction: row;
		justify-content: space-around;
		padding: 0 4rem;
	}
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.5rem;
`;

export const StyledPersonalData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const StyledTextHeading = styled.h2`
	font-size: 1.75em;
	@media screen and (min-width: 768px) {
		font-size: 1.75em;
	}
	@media screen and (min-width: 960px) {
		font-size: 1.25em;
	}
`;

export const StyledTextName = styled.p`
	font-size: 1.5em;
	@media screen and (min-width: 768px) {
		font-size: 1.25em;
	}
	@media screen and (min-width: 960px) {
		font-size: 1em;
	}
`;

export const StyledDetails = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 1.5rem;
	font-size: 1.5em;
	@media screen and (min-width: 768px) {
		font-size: 1.25em;
	}
	@media screen and (min-width: 960px) {
		font-size: 1em;
		column-gap: 2rem;
	}
`;

export const StyledButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 1.5rem;
	font-size: 1.5rem;
	@media screen and (min-width: 960px) {
		column-gap: 1rem;
	}
`;

export const StyledDetail = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 0.25rem;
`;

export const StyledFacebook = styled(BsFacebook)`
	transition: 0.5s ease-in-out;
	&:hover {
		color: #333;
	}
`;

export const StyledGoogle = styled(BsGoogle)`
	transition: 0.5s ease-in-out;
	&:hover {
		color: #333;
	}
`;

export const StyledLogoTypeColor = styled(LogoType)`
	filter: brightness(10);
`;

export const StyledTimeIcon = styled(BiTime)`
	font-size: 1.25em;
`;

export const StyledTelephoneIcon = styled(BsTelephone)`
	font-size: 1.25em;
`;
