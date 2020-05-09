import React from 'react';
import { Container, Tag } from './style';
import Icon from '../icon/';

type Props = {
  isFocused ?: boolean,
  text: string,
}

const TagView = ({ isFocused = false, text }: Props) => (
  <Container>
    <Icon name='assignment' color='lightgray' size={16} />
    <Tag focused={isFocused}>{text}</Tag>
  </Container>
);

export default TagView;