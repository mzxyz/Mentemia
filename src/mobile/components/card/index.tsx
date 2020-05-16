import React, { PureComponent, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';

import {
	Container,
	BGImageContaienr,
	ContentContainer,
	MainTitle,
	Description,
	Button,
	ButtonTitle,
	FavoriteContainer,
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
	onPress: () => void;
};

const Card: React.FC<Props> = ({
	title,
	subTitle,
	tag,
	isFavorite,
	imageSource,
	onFavoriteChanged,
	onPress,
}) => {
	const [isExtend, setIsExtend] = useState(false);
	const [expand, setExpand] = useState(new Animated.Value(0));

	const createInterpolate = (from, to) => ({
		inputRange: [0, 1],
    outputRange: [from, to]
	});

	const BGColorInterpolate = createInterpolate('rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 0.4)');
	const cardHeightInterpolate = createInterpolate(300, 450);
	// TODO: need to get content height range
	const contentHeightInterpolate = createInterpolate(140, 336);

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

	const onChange = () => {
		setIsExtend(!isExtend);
		startAnimation(expand, isExtend ? 0 : 1);
		console.log('----------------on button press ----------------');
	}

	// ----------------on button press ----------------'

	const onCardLayout = (event) => {
		const { nativeEvent } = event;
		const { layout: {x, y, width, height}} = nativeEvent;
		console.log('card layout:', 'x:', x, 'y:',y , 'height:', height );
	};

	const onContentLayout = (event) => {
		const { nativeEvent } = event;
		const { layout: {x, y, width, height}} = nativeEvent;
		console.log('content layout:', 'x:', x, 'y:',y , 'height:', height );
	};

	const renderButton = (title: string) => (
		<Button onPress={onPress}>
			<ButtonTitle>{title}</ButtonTitle>
		</Button>
	);

	const renderPrimaryContent = () => (
		<ContentContainer 
			style={{
				height: expand.interpolate(contentHeightInterpolate), 
				backgroundColor: expand.interpolate(BGColorInterpolate)
			}} 
			focused={isExtend} 
			onLayout={onContentLayout}
		>
			<TagView isFocused={isExtend} text={tag} />
			<MainTitle focused={isExtend}>{title}</MainTitle>
			{<Description>{subTitle}</Description>}
			{renderButton('Read')}
		</ContentContainer>
	);

	return (
		<TouchableWithoutFeedback onPress={onChange} onLayout={onCardLayout}>
			<Container style={{ height: expand.interpolate(cardHeightInterpolate) }}>
				<BGImageContaienr source={imageSource} imageStyle={style.image}>
					{renderPrimaryContent()}
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

const style = StyleSheet.create({
	image: {
		borderRadius: 20,
		borderColor: 'lightgray',
		borderWidth: StyleSheet.hairlineWidth,
	},
});

export default Card;
