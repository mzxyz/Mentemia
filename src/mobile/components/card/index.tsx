import React, { PureComponent, useState } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  NativeModules,
  LayoutAnimation
} from 'react-native';

import { 
  Container, 
  BGImageContaienr, 
  ContentContainer, 
  MainTitle, 
  TagContainer, 
  Tag, 
  Description, 
  Button,
  ButtonTitle, 
} from './style';
import Icon from '../icon/';

const { UIManager } = NativeModules;

// TODO: need to be refactor

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const defaultHeight = 300;
const mainText = 'COVID-19: How to stay social during lockdown';
const tagText = '1 mins * Enjoy';
const detailText = 'Did you know anticipateing a laugh boosts feel good hormones? Looking forward to a to a giggle is almost as good as the real deal.';

const ContentView = ({ isExtend }) => {

  // const [isExtend, setIsExtend] = useState(false);

  const renderButton = (title: string) => (
    <Button>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  )

  return (
    <ContentContainer focused={isExtend}> 
      <TagContainer>
        <Icon name='assignment' color='lightgray' size={16} />
        <Tag focused={isExtend}>{tagText}</Tag>
      </TagContainer>
      <MainTitle focused={isExtend}>{mainText}</MainTitle>
      {isExtend && <Description>{detailText}</Description>}
      {isExtend && renderButton('Read')}
    </ContentContainer>
  );
};

class Card extends PureComponent {
  state = { isExtend: false, height: 300 };
  
  onPress = () => {
    const { isExtend } = this.state;
    LayoutAnimation.configureNext(
        LayoutAnimation.create(
        300, 
        LayoutAnimation.Types.EaseIn, 
        LayoutAnimation.Properties.opacity
    ));
    const height = isExtend ? 300 : 450;
    this.setState({ height, isExtend: !isExtend });
  }

  renderButton = (title: string) => (
    <Button>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  )

  renderPrimaryContent = () => {
    const { isExtend } = this.state;
    return (
      <ContentContainer focused={isExtend}> 
        <TagContainer>
          <Icon name='assignment' color='lightgray' size={16} />
          <Tag focused={isExtend}>{tagText}</Tag>
        </TagContainer>
        <MainTitle focused={isExtend}>{mainText}</MainTitle>
        {isExtend && <Description>{detailText}</Description>}
        {isExtend && this.renderButton('Read')}
      </ContentContainer>
    )
  }

  render() {
    const { isExtend, height } = this.state;
    return (
      <TouchableWithoutFeedback onPress={this.onPress} >
        <Container style={{ height }}>
          <BGImageContaienr
            source={require('../../../images/card.png')}
            imageStyle={style.image}
          >
            {this.renderPrimaryContent()}
          </BGImageContaienr>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

const style = StyleSheet.create({
  image: {
    borderRadius: 20,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth
  }
});

export default Card;
