import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, ListRenderItem } from 'react-native';
import { TabBarView, Card } from '../../components';

type Props = {
  latest: [Object],
  onRequestData: () => void,
  onPushPage: () => void, 
}

const ExplorePage = ({ latest, onRequestData, onPushPage}: Props) => {

  const navigation = useNavigation();

  useEffect(() => {onRequestData()}, []);

  return (
    <ScrollView > 
      {latest.map((item, index) => {
        const { title, details, image, tag } = item;
        return (
          <Card 
            key={`${title}${index}`} 
            title={title}
            subTitle={details}
            tag={tag}
            imageSource={{ uri: image }}  // TODO: intergrate naviation to action
            onPress={() => navigation.navigate('ContentDetails')}
          />
        )}
      )}
    </ScrollView>
  );
}

export default ExplorePage;
