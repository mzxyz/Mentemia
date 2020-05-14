import React from 'react';

import { Container } from './style';
import Icon from '../icon';

type Props = {
	onPress: () => void;
};

const BackButton: React.FC<Props> = ({ onPress }) => (
	<Container onPress={onPress}>
		<Icon name={'clear'} color={'#547cfe'} size={30} />
	</Container>
);

export default BackButton;
