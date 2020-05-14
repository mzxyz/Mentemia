import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Container } from './style';
import Icon from '../icon';

type Props = {
	isFavorite: boolean;
	onPress: (isFavorite: boolean) => void;
};

const FavoriteIcon: React.FC<Props> = ({ isFavorite, onPress }) => {
	const primaryColor = 'gray';
	const primaryIcon = 'favorite-border';

	const hightlightColor = '#f88178';
	const hightlightIcon = 'favorite';

	const [selected, setStatus] = useState(isFavorite);
	const [name, setName] = useState(isFavorite ? hightlightIcon : primaryIcon);
	const [color, setColor] = useState(isFavorite ? hightlightColor : primaryColor);

	const onIconPress = () => {
		if (onPress) {
			onPress(!selected);
		}
		setName(selected ? 'favorite-border' : 'favorite');
		setColor(selected ? primaryColor : hightlightColor);
		setStatus(!selected);
	};

	return (
		<TouchableWithoutFeedback onPress={() => onIconPress()}>
			<Container>
				<Icon name={name} color={color} size={30} />
			</Container>
		</TouchableWithoutFeedback>
	);
};

export default FavoriteIcon;
