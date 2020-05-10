import React from 'react';
import Icon from '../icon';

import { 
  Container, 
  IconContainer,
  TextContainer,
  Title,
  SubTitle
} from './style';

type Props = {
  key: string,
  title: string,
  subTitle: string,
  iconName: string,
  iconColor: string,
  onPress ?: () => void,
};

const RowItem = ({ title, subTitle, iconName, iconColor, onPress }: Props) => (
  <Container onPress={onPress} disabled={!onPress}>
    <IconContainer color={iconColor}>
      <Icon name={iconName} color={'white'} size={25} />
    </IconContainer>
    <TextContainer>
      {!!title && <Title>{title}</Title>}
      {!!subTitle && <SubTitle color={iconColor}>{subTitle}</SubTitle>}
    </TextContainer>
  </Container>
);

export default RowItem;