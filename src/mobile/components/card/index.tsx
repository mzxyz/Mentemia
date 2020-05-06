import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from '../icon/';
import { Container, ContentContainer, MainTitle, TagContainer, Tag } from './style';

const Card = () => (
  <Container
    source={require('../../../images/card.png')}
    imageStyle={style.image}
  >
    <ContentContainer>
      <TagContainer>
        <Icon name='assignment' color='lightgray' size={16} />
        <Tag>1 mins * Enjoy</Tag>
      </TagContainer>
      <MainTitle>Try this: Plan for laughter</MainTitle>
    </ContentContainer>
  </Container>
);

const style = StyleSheet.create({
  image: {
    borderRadius: 20,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth
  }
});

export default Card;
