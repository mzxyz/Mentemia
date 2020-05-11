import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  padding: 10px 10px 0px 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

export const Indicator = styled.View`
  background-color: ${({ color }) => color};
  margin-top: 8px;
  width: 40px;
  height: 2px;
`;