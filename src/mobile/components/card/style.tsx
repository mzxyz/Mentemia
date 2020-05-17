import { StyleSheet, Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Focused } from '../types';

export const Container = styled(Animated.View)`
	flex: 1;
	margin-bottom: 15px;
`;

export const BGImageContaienr = styled.ImageBackground`
	flex: 1;
	justify-content: flex-end;
`;

export const ContentContainer = styled(Animated.View)`
	padding: 20px 20px 30px 20px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-color: lightgray;
	border-width: ${({ focused }) => (focused ? 0 : StyleSheet.hairlineWidth)}px;
	overflow: hidden;
`;

export const TagContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Tag = styled.Text`
	font-size: 12px;
	margin-left: 5px;
	color: ${({ focused }: Focused) => (focused ? 'lightgray' : 'gray')};
`;

export const MainTitle = styled(Animated.Text)`
	font-size: 23px;
	line-height: 35px;
	font-weight: bold;
	margin-top: 10px;
	color: ${({ focused }: Focused) => (focused ? '#fff' : '#000')};
`;

export const DetailsContainer = styled.View``;

export const Description = styled.Text`
	font-size: 15px;
	line-height: 25px;
	font-weight: 500;
	margin: 20px 0px 30px 0px;
	color: #fff;
`;

export const Button = styled.TouchableOpacity`
	background-color: #fff;
	border-radius: 29px;
	justify-content: center;
	align-items: center;
	padding: 20px;
	width: 140px;
`;

export const ButtonTitle = styled.Text`
	font-size: 18px;
	font-weight: 500;
	color: #000;
`;

export const FavoriteContainer = styled.View`
	position: absolute;
	top: 20px;
	right: 20px;
`;

const width = Dimensions.get('window').width;

export const style = StyleSheet.create({
	image: {
		borderRadius: 20,
		borderColor: 'lightgray',
		borderWidth: StyleSheet.hairlineWidth,
		// TODO: Better to use `contain` with correct image size
		resizeMode: 'cover',
	},
});
