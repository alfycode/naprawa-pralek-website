import React, { useState } from 'react';
import { LogoContainer, LogoType as LogoType } from '../Header/HeaderElements';
import { BiTime } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import Link from 'next/link';
import {
	StyledButtonsContainer,
	StyledContainer,
	StyledDetail,
	StyledDetails,
	StyledLogoTypeColor,
	StyledPersonalData,
	LogoWrapper,
	StyledTextHeading,
	StyledTextName,
	StyledFacebook,
	StyledGoogle,
	StyledTelephoneIcon,
	StyledTimeIcon,
} from './FooterElements';
import { Bubble, BubbleWrap } from '../Landing/LandingElements';

const Footer = () => {
	const [isOpen, setisOpen] = useState(false);
	const setIsOpenHandler = () => {
		setisOpen(!isOpen);
	};
	return (
		<StyledContainer vh name="footer">
			<LogoWrapper>
				<LogoContainer
					className="link"
					spy={true}
					smooth={true}
					duration={500}
					onClick={() => {
						scroll.scrollToTop();
						{
							if (isOpen) setIsOpenHandler();
						}
					}}
				>
					<StyledLogoTypeColor
						whileHover={{ scale: 1.1 }}
						src={'/img/logoType.svg'}
						alt="logo pralki"
					/>
				</LogoContainer>
				<StyledPersonalData>
					<StyledTextHeading>Naprawa pralek i agd</StyledTextHeading>
					<StyledTextName>Zenon Szalast</StyledTextName>
				</StyledPersonalData>
			</LogoWrapper>
			<StyledButtonsContainer>
				<Link href="https://www.facebook.com/naprawapraleklublin1/">
					<StyledFacebook />
				</Link>
				<Link href="https://g.page/r/CRNUyEpn1OkuEAE">
					<StyledGoogle />
				</Link>
			</StyledButtonsContainer>
			<StyledDetails>
				<StyledDetail>
					<StyledTimeIcon />
					8:00 - 21:00
				</StyledDetail>
				<StyledDetail>
					<StyledTelephoneIcon />
					+48 603 663 053
				</StyledDetail>
			</StyledDetails>
			<BubbleWrap second>
				<Bubble second landing bgc="#ccc" />
			</BubbleWrap>
		</StyledContainer>
	);
};

export default Footer;
