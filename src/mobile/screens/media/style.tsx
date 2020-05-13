import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  margin-top: 40px;
`;

export const ImageView = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  height: 300px;
`
export const ContentContainer = styled.View`
  flex: 1;
  background-color: #fff;
  margin-top: -40px;
  border-color: lightgray;
  border-top-width: 1px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px 15px 30px 15px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentView = styled(WebView)`
  height: 200px;
  padding-vertical: 20px;
`;

export const SectionLabel = styled.Text`
  font-size: 15px;
  color: lightgray;
  font-weight: 600;
  margin: 0px 0px 10px 15px;
`