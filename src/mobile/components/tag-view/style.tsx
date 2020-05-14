import styled from 'styled-components/native';
import { Focused } from '../types';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Tag = styled.Text`
	font-size: 12px;
	margin-left: 5px;
	color: ${({ focused }: Focused) => (focused ? 'lightgray' : 'gray')};
`;
