import React from 'react';
import { Container, Title, Indicator } from './style';

type Props = {
	title: string;
};

const TabHeader: React.FC<Props> = ({ title }) => (
	<Container>
		<Title>{title}</Title>
		<Indicator color={'#547cfe'} />
	</Container>
);

export default TabHeader;
