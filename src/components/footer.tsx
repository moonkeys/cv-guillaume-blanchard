import { ATTRIBUTES_CSS } from '@/helpers';
import { Contact } from '@/sections';
import styled from 'styled-components';

const FooterWrapper = styled.section`
	background-color: ${ATTRIBUTES_CSS.backgroundColorInverted};
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<Contact />
		</FooterWrapper>
	);
};

export default Footer;
