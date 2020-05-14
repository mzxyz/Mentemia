import React from 'react';
import { Container, Title, Indicator } from './style';
import theme from '../../../theme';

type Props = {
	title: string;
};

const TabHeader: React.FC<Props> = ({ title }) => (
	<Container>
		<Title>{title}</Title>
		<Indicator color={theme.color.blue} />
	</Container>
);

export default TabHeader;
