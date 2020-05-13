import React from 'react';
import { Container, Tag } from './style';
import Icon from '../icon/';

type Props = {
  isFocused ?: boolean,
  text: string,
}

const TagView: React.FC<Props> = ({ isFocused = false, text }: Props) => (
  <Container>
    <Icon name='assignment' color='lightgray' size={20} />
    <Tag focused={isFocused}>{text}</Tag>
  </Container>
);

export default TagView;