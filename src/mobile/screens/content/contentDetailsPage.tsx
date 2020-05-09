import React, { PureComponent } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, ImageView, ContentContainer, SectionLabel } from './style';
import { Card, TagView } from '../../components';

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
    const { title, details, image, tag } = item;
    const { navigation } = this.props;
    return (
      <Card 
        key={`${title}${index}`} 
        title={title}
        subTitle={details}
        tag={tag}
        imageSource={{ uri: image }}
        onPress={() => navigation.navigate('ContentDetails')}
      />
    )}

  render() {
    const { content, image, tag, relatedTopics } = this.props;
    return (
      <Container>
        <ScrollView>
        <ImageView source={{ uri: image }} />
        <ContentContainer>
          <TagView text={tag} />
          <WebView 
            style={{ height: 300 }}
            originWhitelist={['*']} 
            source={content} 
          />
        </ContentContainer>
        <SectionLabel>Related</SectionLabel>
        {relatedTopics.map(this.renderTopics)}
        </ScrollView>
      </Container>
    );
  }
}

export default ContentDetailsPage;
