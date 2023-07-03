import { Card } from '@/components/cards';
import { Col, Grid, Row, ViewFlex } from '@/components/container';
import Image from 'next/image';
import styled from 'styled-components';

const skills = [
	{
		title: 'Framework Front JS',
		icon: '/images/atom.png',
		text: 'React / React native / Next.js / Vue.js',
	},
	{
		title: 'Backend',
		icon: '/images/database.png',
		text: 'Ruby on Rails / Firebase',
	},

	{
		title: 'Langages de programmation',
		icon: '/images/programming.png',
		text: 'HTML / CSS / JavaScript / TypeScript',
	},

	{
		title: 'Langue',
		icon: '/images/language.png',
		text: 'Anglais (BULATS niveau B2+)',
	},

	{
		title: 'Qualité en entreprise',
		icon: '/images/trade.png',
		text: "Travail d'équipe / Autonomie / Proactivité",
	},
];

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 16px;
	justify-items: center;
`;

const Competence = () => {
	return (
		<section>
			<h2>Mes compétences</h2>
			<Wrapper>
				{skills.map((skill, key) => (
					<Card
						key={key}
						title={skill.title}
						// style={{ width: '250px', height: '100%' }}
					>
						<ViewFlex>
							<Image
								src={skill.icon}
								alt={''}
								width={30}
								height={30}
								style={{ margin: 20 }}
							/>
							<div>
								<span>{skill.text}</span>
							</div>
						</ViewFlex>
					</Card>
				))}
			</Wrapper>
		</section>
	);
};

export default Competence;
