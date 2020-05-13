import React, { useEffect } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, ImageView, ContentContainer, HeaderContainer, SectionLabel, ContentView } from './style';
import { Card, TagView, FavoriteIcon} from '../../components';
import { MediaCard } from '../../../reducers/types';
import { Props, connector } from './connector';

const MediaDetailsPage: React.FC<Props> = ({
  image, 
  favorite, 
  content,
  tag, 
  relatedTopics, 
  onRequestData,
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
        isFavorite
        imageSource={{ uri: image }}
        onFavoriteChanged={() => {}}
        onPress={() => {
          navigation.goBack();
          navigation.navigate('ContentDetails');
        }}
      />);
  }

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
  }

  return (
    <Container>
      <ScrollView>
        <ImageView source={{ uri: image }} />
        {renderContent()}
        {!!relatedTopics && <SectionLabel>Related</SectionLabel>}
        {relatedTopics.map(renderTopics)}
      </ScrollView>
    </Container>
  );
}

export default connector(MediaDetailsPage);
