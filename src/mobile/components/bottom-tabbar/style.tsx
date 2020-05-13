import styled from 'styled-components/native';
import { Animated } from 'react-native';

// TODO: this height should be change on different size devices
export const Container = styled.View`
  flex: 1; 
  height: 84px;
`;

export const ItemContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 15px;
`;
   
export const LabelText = styled(Animated.Text)`
  color: ${({ color }: { color: string }) => color}
  font-size: 10px;
  margin-top: -6px;
`;

export const DotView = styled(Animated.View)`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #547cfe;
`;