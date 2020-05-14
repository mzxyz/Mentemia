import React from 'react';

import theme from '../../../theme';
import { Container } from './style';
import Icon from '../icon';

type Props = {
	onPress: () => void;
};

const BackButton: React.FC<Props> = ({ onPress }) => (
	<Container onPress={onPress}>
		<Icon name={'clear'} color={theme.color.blue} size={30} />
	</Container>
);

export default BackButton;
