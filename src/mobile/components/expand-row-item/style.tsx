import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';
import { Color } from '../types';

export const Container = styled.View`
	background-color: #fff;
	padding-right: 0px;
	margin: 10px 15px 0px 15px;
	border-radius: 30px;
	border-width: 1px;
	border-color: #eeeeee;
`;

export const RowContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const ContentContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin: 15px;
`;

export const IconContainer = styled.View`
	width: 46px;
	height: 46px;
	justify-content: center;
	align-items: center;
	border-radius: 23px;
	background-color: ${({ color }: Color) => color};
`;

export const TextContainer = styled.View`
	justify-content: center;
	margin-left: 15px;
`;

export const Title = styled.Text`
	font-size: 17px;
	font-weight: 500;
`;

export const SubTitle = styled.Text`
	font-size: 15px;
	font-weight: 500;
	color: ${({ color }: Color) => color};
	margin-top: 2px;
`;

export const LabelView = styled.View`
	background-color: ${({ color }: Color) => color};
	border-top-right-radius: 30px;
	border-bottom-right-radius: ${({ radius }: { radius: number }) => radius}px;
	width: 90px;
`;

export const DetailContainer = styled.View`
	padding: 15px;
	margin-top: 10px;
`;

export const DetailText = styled.Text`
	font-size: 14px;
	line-height: 20px;
`;
