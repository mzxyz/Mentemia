import React, { useRef, useEffect } from 'react';
import { ScrollView, View, FlatList } from 'react-native';

import { TabBarView, Card } from '../../components';
import { MediaCard } from '../../../reducers/types';

type Props = {
	type: string;
	dataList: MediaCard[];
	onRefreshData: (type: string) => void;
	onFavoriteChanged: (item: MediaCard, isFavorite: boolean) => void;
	onNavigation: () => void;
};

const ExplorePage: React.FC<Props> = ({
	type,
	dataList,
	onRefreshData,
	onFavoriteChanged,
	onNavigation
}) => {
	useEffect(() => { onRefreshData(type);}, []);

	const cardHeight = { origin: 315, expand: 465 };
	const cardHeightList = useRef(dataList.map(() => cardHeight.origin));
	const listRef = useRef();

	const offsetFromIndex = (isExpanded: boolean, index: number) => {
		const offset = cardHeightList.current.slice(0, index).reduce((acc, value) => acc + value, 0);
		return offset + (isExpanded ? 0 : cardHeight.origin / 2);
	}

	const onCardPress = (isExpanded: boolean, index: number) => {
		const currentHeight = isExpanded ? cardHeight.expand : cardHeight.origin;			
		cardHeightList.current[index] = currentHeight;

		listRef.current.scrollToOffset({ 
			offset: offsetFromIndex(isExpanded, index),
			animated: true
		});
	}

	const renderCard = ({ item, index}: { item: MediaCard, index: number }) => {
		const { id, title, details, image, tag, isFavorite } = item;
		return (
			<Card
				key={`${title}${index}`}
				title={title}
				subTitle={details}
				tag={tag}
				isFavorite={isFavorite}
				imageSource={{ uri: image }}
				onBtnPress={onNavigation}
				onFavoriteChanged={(isFavorite) => onFavoriteChanged(item, isFavorite)}
				onPress={(isExpanded) => onCardPress(isExpanded, index)}
			/>
		);
	}


	return (
		<FlatList
			ref={ref => listRef.current = ref}
			initialNumToRender={6}
			data={dataList}
			CellRendererComponent={renderCard}
			keyExtractor={item => `${item.id}${item.title}`}
			contentContainerStyle={{ margin: 15 }}
			contentInset={{  bottom: cardHeight.origin / 2 }}
		/>
	);
}

export default ExplorePage;
