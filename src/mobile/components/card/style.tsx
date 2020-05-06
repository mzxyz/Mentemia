import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin: 10px 20px;
  border-radius: 20px;
  border-color: lightgray;
  border-width: ${StyleSheet.hairlineWidth};
  background-color: lightblue;
  height: 200px;
`;
