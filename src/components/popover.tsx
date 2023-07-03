import { ATTRIBUTES_CSS } from '@/helpers';
import React, { useState } from 'react';
import styled from 'styled-components';

interface PopoverProps {
	content: string | React.ReactNode;
	children: React.ReactNode;
}

const PopoverWrapper = styled.div`
	position: relative;
	display: inline-block;
`;

const PopoverContent = styled.div`
	position: absolute;
	z-index: 1;
	bottom: 120%;
	left: 50%;
	transform: translateX(-50%);
	padding: 8px;
	background-color: ${ATTRIBUTES_CSS.backgroundColor};
	color: ${ATTRIBUTES_CSS.fontColor};
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	min-width: 200px;
	border-radius: 4px;
	font-size: 14px;
	visibility: ${({ isOpen }: { isOpen: boolean }) =>
		isOpen ? 'visible' : 'hidden'};
	opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 1 : 0)};
	transition: opacity 0.3s, visibility 0.3s;
	&::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		/* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
		border-width: 5px;
		border-style: solid;
		border-color: ${ATTRIBUTES_CSS.backgroundColor} transparent transparent
			transparent;
	}
`;

const Popover: React.FC<PopoverProps> = ({ content, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMouseEnter = () => {
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		setIsOpen(false);
	};

	return (
		<PopoverWrapper
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
			<PopoverContent isOpen={isOpen}>{content}</PopoverContent>
		</PopoverWrapper>
	);
};

export default Popover;
