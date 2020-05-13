import React, { useState } from 'react';
import { Container } from './style';
import Icon from '../icon';

type Props = {
  onPress : (selected: boolean) => void,
}

const FavoriteIcon: React.FC<Props> = ({ onPress }) => {
  const primaryColor = 'gray';
  const hightlightColor = 'red';
  
  const [selected, setStatus] = useState(false);
  const [name, setName] = useState('favorite-border');
  const [color, setColor] = useState(primaryColor);

  function onIconPress() {
    if (onPress) { onPress(!selected) }
    setName(selected ? 'favorite-border' : 'favorite');
    setColor(selected ? 'gray' : 'red');
    setStatus(!selected);
  }

  return (
    <Container onPress={onIconPress}>
      <Icon name={name} color={color} size={30} />
    </Container>
  );
}

export default FavoriteIcon;
