import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, ContentContainer, MainTitle, Tag } from './style';

const Card = () => (
  <Container
    source={require('../../../images/card.png')}
    imageStyle={style.image}
  >
    <ContentContainer>
      <Tag>1 mins * Enjoy</Tag>
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
