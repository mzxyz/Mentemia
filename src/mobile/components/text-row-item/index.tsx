import React from 'react';
import { Container, Title, Content } from './style';

type Props = {
  key: string,
  title: string,
  content: string,
  hightlight ?: boolean,
  onPress ?: () => void,
}

const TextRowItem = ({ title, content, hightlight = false, onPress }: Props) => (
  <Container onPress={onPress}>
    <Title hightlight={hightlight}>{title}</Title>
    <Content>{content}</Content>
  </Container>
);

export default TextRowItem;
