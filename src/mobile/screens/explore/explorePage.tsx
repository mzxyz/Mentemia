import React, { useEffect } from 'react';
import { ScrollView, View, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TabBarView, Card } from '../../components';
import { MediaCard } from '../../../reducers/types';

type Props = {
  type: string,
  dataList: MediaCard[],
  onRefreshData: (type: string) => void,
  onFavoriteChanged : (item: MediaCard, isFavorite: boolean) => void,
  onMediaDetails: (id: string) => void, 
}

const ExplorePage = ({
  type,
  dataList, 
  onRefreshData,
  onFavoriteChanged,
  onMediaDetails
}: Props) => {
  useEffect(() => {
    onRefreshData(type);
  }, []);

  return (
    <ScrollView > 
      {dataList.map((item, index) => {
        const { id, title, details, image, tag, isFavorite } = item;
        return (
          <Card
            key={`${title}${index}`} 
            title={title}
            subTitle={details}
            tag={tag}
            isFavorite={isFavorite}
            imageSource={{ uri: image }}
            onFavoriteChanged={isFavorite => onFavoriteChanged(item, isFavorite)}
            onPress={() => onMediaDetails('key') }
          />
        )}
      )}
    </ScrollView>
  );
}

export default ExplorePage;
