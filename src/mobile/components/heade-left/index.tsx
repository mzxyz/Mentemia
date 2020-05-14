import React from 'react';
import Icon from '../icon';
import { Container, Title } from './style';

type Props = {
	title: string;
	iconName: string;
};

const HeaderLeft: React.FC<Props> = ({ title, iconName }) => (
	<Container>
		{!!iconName && <Icon name={iconName} color={'#547cfe'} size={35} />}
		{!!title && <Title>{title}</Title>}
	</Container>
);

export default HeaderLeft;
