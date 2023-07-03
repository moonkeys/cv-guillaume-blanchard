import styled from 'styled-components';

type GridProps = {
	gap?: number;
	columns?: string;
	autoColumns?: string;
	autoFlow?: string;
	autoRows?: string;
	areas?: string;
	columnGap?: string;
	rowGap?: string;
};

const Grid = styled.div<GridProps>`
	display: grid;
	gap: ${({ gap }) => `${gap}px`};
	grid-template-columns: ${({ columns }) => columns};
	grid-auto-columns: ${({ autoColumns }) => autoColumns};
	grid-auto-flow: ${({ autoFlow }) => autoFlow};
	grid-auto-rows: ${({ autoRows }) => autoRows};
	grid-template-areas: ${({ areas }) => areas};
	grid-column-gap: ${({ columnGap }) => columnGap};
	grid-row-gap: ${({ rowGap }) => rowGap};
`;

type ColProps = {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	offset?: number;
};

const Col = styled.div<ColProps>`
	${({ xs }) =>
		xs &&
		`
    grid-column: span ${xs};
    grid-column-start: auto;
    grid-column-end: span ${xs};
  `}

	${({ sm }) =>
		sm &&
		`
    @media (min-width: 576px) {
      grid-column: span ${sm};
      grid-column-start: auto;
      grid-column-end: span ${sm};
    }
  `}

  ${({ md }) =>
		md &&
		`
    @media (min-width: 768px) {
      grid-column: span ${md};
      grid-column-start: auto;
      grid-column-end: span ${md};
    }
  `}

  ${({ lg }) =>
		lg &&
		`
    @media (min-width: 992px) {
      grid-column: span ${lg};
      grid-column-start: auto;
      grid-column-end: span ${lg};
    }
  `}

  ${({ xl }) =>
		xl &&
		`
    @media (min-width: 1200px) {
      grid-column: span ${xl};
      grid-column-start: auto;
      grid-column-end: span ${xl};
    }
  `}

  ${({ offset }) =>
		offset &&
		`
    grid-column-start: ${offset + 1};
  `}
`;

type RowProps = {
	gap?: number;
	alignItems?: string;
	justifyContent?: string;
};

const Row = styled.div<RowProps>`
	display: flex;
	flex-wrap: wrap;
	margin-left: ${({ gap }) => (gap ? `${-gap}px` : '0px')};
	margin-right: ${({ gap }) => (gap ? `${-gap}px` : '0px')};
	align-items: ${({ alignItems }) => alignItems};
	justify-content: ${({ justifyContent }) => justifyContent};

	& > ${Col} {
		padding-left: ${({ gap }) => `${gap}px`};
		padding-right: ${({ gap }) => `${gap}px`};
	}
`;

const ViewFlex = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
`;

export { Grid, Row, Col, ViewFlex };
