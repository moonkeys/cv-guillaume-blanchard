import { ATTRIBUTES_CSS } from '@/helpers';
import styled from 'styled-components';

const Title = styled.h2`
	color: ${ATTRIBUTES_CSS.fontColorInverted};
	background-color: ${ATTRIBUTES_CSS.backgroundColorInverted};
	padding: 0.5em;
	/* margin: 20px; */
	border-radius: ${ATTRIBUTES_CSS.borderRadius};
`;

export default Title;
