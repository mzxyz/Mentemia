import React, { PureComponent } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Container, ImageView, ContentContainer, HeaderContainer, SectionLabel, ContentView } from './style';
import { Card, TagView, FavoriteIcon} from '../../components';

type Props = {
  favorite: boolean,
  content: string,
  image: string,
  navigation: Object,
  relatedTopics: [Object],
  onRequestData: () => void,
};

class ContentDetailsPage extends PureComponent<Props> {

  componentDidMount() {
    const { onRequestData } = this.props;
    onRequestData();
  }

  renderTopics = (item, index) => {
    const { navigation } = this.props;
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
      />)
  }

  render() {
    const { content, image, tag, relatedTopics } = this.props;
    return (
      <Container>
        <ScrollView>
          <ImageView source={{ uri: image }} />
          <ContentContainer>
            <HeaderContainer>
              <TagView text={tag} />
              <FavoriteIcon onPress={() => {}} />
            </HeaderContainer>
            <ContentView originWhitelist={['*']} source={{ html: content }} />
          </ContentContainer>
          {!!relatedTopics && <SectionLabel>Related</SectionLabel>}
          {relatedTopics.map(this.renderTopics)}
        </ScrollView>
      </Container>
    );
  }
}

export default ContentDetailsPage;
