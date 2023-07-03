import { ATTRIBUTES_CSS, BREAKPOINTS, COLORS, ViewFlex } from '@/helpers';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import Contact from './contact';

const CircleFirst = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 50vw;
	height: 60vh;
	display: block;
	z-index: 2;
	border-radius: 0% 20% 70% 5% / 20% 0% 70% 5%;
	background-color: ${ATTRIBUTES_CSS.presentationCircleColor1};

	@media screen and (max-width: ${BREAKPOINTS.md}) {
		width: 80vw;
	}
	@media screen and (max-width: ${BREAKPOINTS.sm}) {
		width: 100vw;
	}

	/* transition: transform 0.3s ease-in-out;
	&:hover {
		transform: scale(1.2) translate(-5%, -5%);
	} */
`;

const CircleSecond = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 70vw;
	height: 80vh;
	display: block;

	border-radius: 0% 20% 0% 35% / 20% 0% 70% 15%;
	background-color: ${ATTRIBUTES_CSS.presentationCircleColor2};

	@media screen and (max-width: ${BREAKPOINTS.md}) {
		width: 80vw;
	}
	@media screen and (max-width: ${BREAKPOINTS.sm}) {
		width: 100vw;
		height: 100vh;
		border-radius: 0%;
	}
	/* 
	transition: transform 0.4s ease-in-out;
	&:hover {
		transform: scale(1.03) rotate(-2deg);
	} */
`;

const CircleThird = styled.div`
	position: absolute;
	top: 20%;
	left: 25%;
	z-index: 1;
	width: 40vh;
	height: 40vh;
	display: block;

	border-radius: 50%;
	border: 0.5rem solid ${ATTRIBUTES_CSS.presentationCircleColor3};
	background-color: transparent;

	transition: transform 0.2s ease-in-out;
	&:hover {
		transform: scale(1.1) rotate(10deg);
	}

	@media screen and (max-width: ${BREAKPOINTS.sm}) {
		display: none;
	}
`;

const Title = styled.div`
	position: relative;
	/* top: 0;
	left: 0; */
	z-index: 4;
	color: ${ATTRIBUTES_CSS.fontColorInverted};
	width: 45vw;
	padding: 3em;
	@media screen and (max-width: ${BREAKPOINTS.md}) {
		max-width: 100vw;
	}
`;

const ProfilPicture = styled(Image)`
	border: 0.5rem solid ${ATTRIBUTES_CSS.presentationCircleColor3};
	border-radius: 70% 20% 80% 85% / 70% 60% 70% 65%;
	@media screen and (max-width: ${BREAKPOINTS.md}) {
		margin-top: 2em;
		width: 250px;
		height: 250px;
		display: flex;
		justify-content: center;
	}
	@media screen and (max-width: ${BREAKPOINTS.sm}) {
		margin-top: 2em;
		width: 300px;
		height: 300px;
		margin: 0;
	}

	transition: transform 0.4s ease-in-out;
	&:hover {
		transform: scale(1.1) rotate(2deg);
	}
`;

const PictureWrapper = styled.div`
	position: relative;
	z-index: 4;
	left: 10%;
	top: 10%;
	width: 25vw;
	/* margin: 1em 2em 2em 5em; */
	@media screen and (max-width: ${BREAKPOINTS.md}) {
		width: 100%;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}
`;

const Section = styled.section`
	min-height: 100vh;

	.flex {
		flex: 1;
	}
`;

const ContactWrapper = styled.div`
	z-index: 8;
	position: relative;
	display: flex;
	justify-content: center;
`;

const Presentation = () => {
	return (
		<Section>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div className='flex'>
					<Title>
						<span>Bonjour, je m&apos;appelle,</span>
						<h1>Guillaume Blanchard</h1>
						<span>et je suis</span>
						<h2>Développeur Web et Mobile</h2>
					</Title>

					<PictureWrapper>
						<ProfilPicture
							alt='photo de profil'
							src='/images/profil-picture.png'
							width={300}
							height={300}
						/>
					</PictureWrapper>
				</div>
				<div className='flex'>
					<ContactWrapper>
						<Contact />
					</ContactWrapper>
				</div>
			</div>

			<CircleFirst />
			<CircleSecond />
			<CircleThird />
		</Section>
	);
};

export default Presentation;
