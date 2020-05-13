import React, { useEffect } from 'react';
import { ScrollView, StatusBar } from 'react-native';

import { Container, ImageView, ContentContainer, HeaderContainer, SectionLabel, ContentView } from './style';
import { Card, TagView, FavoriteIcon} from '../../components';
import { Card as CardProps } from '../../../reducers/types';
import { Props, connector } from './connector';

const MediaDetailsPage: React.FC<Props> = ({
  image, 
  favorite, 
  content,
  tag, 
  relatedTopics, 
  onRequestData,
  navigation,
}) => {
  useEffect(() => {
    onRequestData();
  }, []);

  const renderTopics = (item: CardProps, index: number) => {
    const { title, details, image, tag } = item;
    return (
      <Card 
        key={`${title}${index}`} 
        title={title}
        subTitle={details}
        tag={tag}
        imageSource={{ uri: image }}
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