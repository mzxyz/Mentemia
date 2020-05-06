import React from 'react';
import { createIconSet } from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icon as IconSet } from '@types/react-native-vector-icons/Icon';
import { get } from 'lodash';

type Props = {
  name: string,
  color: string,
  size: number,
  IconSet?: IconSet
};

const Icon = ({ name, color, size, IconSet = MaterialIcons }: Props) => {
  IconSet.loadFont();
  return <IconSet name={name} color={color} size={size} />;
};

export default Icon;
