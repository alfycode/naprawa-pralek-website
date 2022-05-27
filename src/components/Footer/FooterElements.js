import styled from 'styled-components';
import { Container } from '../Container';
import { LogoType } from '../Header/HeaderElements';

export const StyledContainer = styled(Container)`
	width: 100%;
	min-height: 100px;
	align-items: center;
	justify-content: center;
	padding: 1.5rem 4rem;
	color: white;
	row-gap: 1.75rem;

	@media screen and (min-width: 960px) {
		flex-direction: row;
		justify-content: space-between;
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
	font-size: 2em;
  @media screen and (min-width: 768px) {
		font-size: 2em;
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

export const StyledLogoTypeColor = styled(LogoType)`
	filter: brightness(10);
`;