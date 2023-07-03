import { ATTRIBUTES_CSS } from '@/helpers';
import styled from 'styled-components';

const BorderDotted = styled.div`
	border-left: 3px dotted ${ATTRIBUTES_CSS.fontColor};
	margin-left: 10px;
	height: 200px;
	padding: 20px;
`;

const Timeline = () => {
	return (
		<BorderDotted>
			<div>date</div>
			oui
		</BorderDotted>
	);
};

export default Timeline;
