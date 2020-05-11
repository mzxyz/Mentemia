import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  padding: 20px;
  padding-bottom: 25px;
  margin: 10px 15px 0px 15px;
  border-radius: 25px;
  border-width: 1px;
  border-color: #eeeeee;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({ hightlight }) => hightlight ? 'green' : '#547cfe'};
`;

export const Content = styled.Text`
  font-weight: 500;
  font-size: 16px;
  margin-top: 10px;
  line-height: 25px;
  color: #000;
`;
