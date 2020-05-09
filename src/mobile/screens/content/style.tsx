import styled from 'styled-components';

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
  border-width: 1px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 30px 10px 20px 10px;
`;

export const SectionLabel = styled.Text`
  font-size: 17px;
  color: lightgray;
  font-weight: 600;
  margin: 20px 0px 10px 15px;
`