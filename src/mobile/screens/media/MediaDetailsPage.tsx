import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
	Container,
	ImageView,
	ContentContainer,
	HeaderContainer,
	SectionLabel,
	ContentView,
	BackContainer,
} from './style';
import { Card, TagView, FavoriteIcon, BackButton } from '../../components';
import { MediaCard } from '../../../reducers/types';
import { Props } from './index';

const MediaDetailsPage: React.FC<Props> = ({
	image,
	favorite,
	content,
	tag,
	relatedTopics,
	onRequestData,
	onFavoriteChanged,
	onNavigateToMediaPage,
	onPageBack,
}) => {
	useEffect(() => {
		onRequestData();
	}, []);

	const navigation = useNavigation();

	const renderTopics = (item: MediaCard, index: number) => {
		const { title, details, image, tag, isFavorite } = item;
		return (
			<Card
				key={`${title}${index}`}
				title={title}
				subTitle={details}
				tag={tag}
				isFavorite={isFavorite}
				imageSource={{ uri: image }}
				onFavoriteChanged={(isFavorite) => onFavoriteChanged(item, isFavorite)}
				onPress={onNavigateToMediaPage}
			/>
		);
	};

	const renderContent = () => {
		return (
			<ContentContainer>
				<HeaderContainer>
					<TagView text={tag} />
					<FavoriteIcon onPress={() => {}} />
				</HeaderContainer>
				<ContentView originWhitelist={['*']} source={{ html: content }} />
			</ContentContainer>
		);
	};

	return (
		<Container>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageView source={{ uri: image }} />
				{renderContent()}
				{!!relatedTopics && <SectionLabel>Related</SectionLabel>}
				{relatedTopics.map(renderTopics)}
			</ScrollView>
			<BackContainer>
				<BackButton onPress={onPageBack} />
			</BackContainer>
		</Container>
	);
};

export default MediaDetailsPage;
