import React from 'react';
import { createIconSet } from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icon as IconSet } from '@types/react-native-vector-icons/Icon';
import { get } from 'lodash';

type Props = {
  name: string,
  size: number,
  color : string,
  Icon ?: IconSet
};

const Icon: React.FC<Props> = ({ 
  name, 
  size, 
  color,
  Icon = MaterialIcons 
}) => {
  IconSet.loadFont();
  return <IconSet name={name} color={color} size={size} />;
};

export default Icon;
