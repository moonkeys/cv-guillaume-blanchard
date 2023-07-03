import Popover from '@/components/popover';
import { ATTRIBUTES_CSS, ViewFlex } from '@/helpers';
import Image from 'next/image';
import styled from 'styled-components';

const contacts = [
	{ icon: '/images/phone-call.png', label: '+336 37 47 40 49' },
	{ icon: '/images/mail.png', label: 'guimi.blanchard@gmail.com' },
	{
		icon: '/images/linkedin.png',
		label: 'linkedin.com/in/guillaume-blanchard/',
	},
	{ icon: '/images/github.png', label: 'github.com/moonkeys' },
];

const Icon = styled(Image)`
	background-color: ${ATTRIBUTES_CSS.fontColorInverted};
	border-radius: 12px;
	padding: 12px;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	margin: 12px 0px;

	a {
		margin-left: 8px;
		color: ${ATTRIBUTES_CSS.fontColorInverted};
	}
`;

const Section = styled.section`
	color: ${ATTRIBUTES_CSS.fontColorInverted};
	text-align: center;
	display: flex;
	align-items: center;
	flex-flow: column wrap;
	padding: 40px 16px;
	h2 {
		padding-bottom: 8px;
		border-bottom: 3px solid ${ATTRIBUTES_CSS.fontColorInverted};
	}
`;

const Contact = () => {
	return (
		<Section>
			<h2>Contact</h2>
			<div>
				{contacts.map((contact, index) => (
					<Item
						key={index}
						style={{ flexDirection: 'row' }}
					>
						<Icon
							alt={contact.icon}
							src={contact.icon}
							width={25}
							height={25}
						/>
						<a href={contact.label}>{contact.label}</a>
					</Item>
				))}
			</div>
		</Section>
	);
};

export default Contact;
