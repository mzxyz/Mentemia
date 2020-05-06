import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  margin: 10px 20px;
  resize-mode: cover;
  height: 300px;
`;

export const ContentContainer = styled.View`
  background-color: white;
  padding: 20px 20px 30px 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-color: lightgray;
  border-width: ${StyleSheet.hairlineWidth};
  overflow: hidden;
`;

export const TagContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Tag = styled.Text`
  font-size: 12px;
  color: gray;
  margin-left: 5px;
`;

export const MainTitle = styled.Text`
  font-size: 23px;
  font-weight: 700;
  color: black;
  margin-top: 10px;
`