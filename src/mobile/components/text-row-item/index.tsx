import React from 'react';
import { Container, Title, Content } from './style';

type Props = {
  key: string,
  title: string,
  content: string,
  hightlight ?: boolean,
  onPress ?: () => void,
}

const TextRowItem: React.FC<Props> = ({
  title,
  content,
  hightlight = false,
  onPress
}) => (
  <Container onPress={onPress}>
    <Title hightlight={hightlight}>{title}</Title>
    <Content>{content}</Content>
  </Container>
);

export default TextRowItem;
