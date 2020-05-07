import React from 'react';
import { Container, Title, Indicator } from './style';

type Props = {
  title: string,
}

const TabHeader = ({ title }: Props) => (
  <Container>
    <Title>{title}</Title>
    <Indicator color={'#547cfe'} />
  </Container>
);

export default TabHeader;
