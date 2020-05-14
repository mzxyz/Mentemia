import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
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

// just a demo for pull refresh
const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
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

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    > 
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
