import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icon as IconType } from '@types/react-native-vector-icons/Icon';
import { get } from 'lodash';

type Props = {
	name: string;
	size: number;
	color: string;
	IconSet?: IconType;
};

const Icon: React.FC<Props> = ({ name, size, color, IconSet = MaterialIcons }) => {
	IconSet.loadFont();
	return <IconSet name={name} color={color} size={size} />;
};

export default Icon;
