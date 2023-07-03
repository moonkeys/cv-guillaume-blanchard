import { ATTRIBUTES_CSS } from '@/helpers';
import { ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

export const CardWrapper = styled.div`
	border: ${ATTRIBUTES_CSS.border};
	border-radius: 10px;
	padding: 25px;

	&:hover {
		/* box-shadow: ; */
	}
	/* max-width: 250px; */
	h3 {
		text-align: center;
	}
`;

interface Card {
	title: string | ReactNode;
	children: string | ReactNode;
	style?: CSSProperties;
}

export const Card = (props: Card) => {
	return (
		<CardWrapper style={props?.style}>
			<h3>{props.title}</h3>
			<p>{props.children}</p>
		</CardWrapper>
	);
};
