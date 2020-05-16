import React, { PureComponent, useState, useRef } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Animated, View } from 'react-native';
import _ from 'lodash';

import {
	Container,
	BGImageContaienr,
	ContentContainer,
	MainTitle,
	DetailsContainer,
	Description,
	Button,
	ButtonTitle,
	FavoriteContainer,
	style,
} from './style';
import Icon from '../icon/';
import FavoriteIcon from '../favorite-icon';
import TagView from '../tag-view';

type Props = {
	title: string;
	subTitle: string;
	tag: string;
	isFavorite: boolean;
	imageSource: { uri: string } | number;
	onFavoriteChanged: (isFavorite: boolean) => void;
	onPress: (isExpand: boolean) => void;
	onBtnPress: () => void,
};

export const CARD_HEIGHT = 300;
export const CARD_EXPAND_HEIGHT = 450;

const Card: React.FC<Props> = ({
	title,
	subTitle,
	tag,
	isFavorite,
	imageSource,
	onFavoriteChanged,
	onBtnPress,
	onPress,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [expand, setExpand] = useState(new Animated.Value(0));
	const [detailsHeight, setDetailsHeight] = useState(0);
	const [contentExpandHeight, setContentExpandHeight] = useState(0);

	const createInterpolate = (from, to) => ({
		inputRange: [0, 1],
    outputRange: [from, to],
		extrapolate: 'clamp'
	});

	// create interpolate values
	const BGColorInterpolate = createInterpolate('rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 0.4)');
	const cardHeightInterpolate = createInterpolate(CARD_HEIGHT, CARD_EXPAND_HEIGHT);

	const startAnimation = (
		origin: Animated.Value, 
		toValue: number, 
		duration = 500
	) => {
		Animated.timing(origin, {
			toValue,
			duration,
			useNativeDriver: false,
		}).start();
	}

	const getHeight = (event) => {
		const { nativeEvent } = event;
		return _.get(event, 'nativeEvent.layout.height', 0);
	}
	
	const emptyFn = () => {};

	const onCardPress = () => {
		onPress(!isExpanded);
		startAnimation(expand, isExpanded ? 0 : 1);
		setIsExpanded(!isExpanded);
	}

	const onDetailsLayout = (event) => {
		setDetailsHeight(getHeight(event));
	};

	const onExpandLayout = (event) => {
		setContentExpandHeight(getHeight(event));
	};

	const animationStyle = {
		backgroundColor: expand.interpolate(BGColorInterpolate),
		height: expand.interpolate({
			inputRange: [0, 1],
			outputRange: [contentExpandHeight - detailsHeight, contentExpandHeight],
			extrapolate: 'clamp'
		})
	};

	const hiddenStyle = {
		opacity: 0,
		position: 'absolute',
	};

	// The card component need to render 2 times
	// 1. first render pass the layout fn to get the card height
	// 2. second render display the card properly
	const renderContent = (
		style,
		onDetailsLayout = emptyFn,
		onExpandLayout = emptyFn
	) => (
		<ContentContainer 
			style={style}
			focused={isExpanded}
			onLayout={onExpandLayout}
		>
			<TagView isFocused={isExpanded} text={tag} />
			<MainTitle focused={isExpanded}>{title}</MainTitle>
			<DetailsContainer onLayout={onDetailsLayout}>
			{<Description>{subTitle}</Description>}
			<Button onPress={onBtnPress}>
				<ButtonTitle>Read</ButtonTitle>
			</Button>
			</DetailsContainer>
		</ContentContainer>
	);

	return (
		<TouchableWithoutFeedback onPress={onCardPress}>
			<Container style={{ height: expand.interpolate(cardHeightInterpolate) }}>
				<BGImageContaienr source={imageSource} imageStyle={style.image}>
					{renderContent(hiddenStyle, onDetailsLayout, onExpandLayout)}
					{renderContent(animationStyle)}
				</BGImageContaienr>
				<FavoriteContainer>
					<FavoriteIcon
						isFavorite={isFavorite}
						onPress={(isFavorite) => onFavoriteChanged(isFavorite)}
					/>
				</FavoriteContainer>
			</Container>
		</TouchableWithoutFeedback>
	);
};

export default Card;
