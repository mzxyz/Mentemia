import React, { PureComponent } from 'react';
import { StyleSheet, Animated, NativeModules, LayoutAnimation } from 'react-native';

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

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const defaultHeight = 300;
const mainText = 'Try this: Plan for laughter';
const tagText = '1 mins * Enjoy';
const detailText = 'Did you know anticipateing a laugh boosts feel good hormones? Looking forward to a to a giggle is almost as good as the real deal.';

class Card extends PureComponent {
  state = {
    isExtend: false,
    height: defaultHeight
  };

  extendedHeight = (isExtend: boolean) => {
    const { height} = this.state;
    return !isExtend ? defaultHeight + 100 : defaultHeight;
  }

  onCardLayoutChange = (event) => {
    const { cardHeight } = this.props;
    const { heihgt } = event.nativeEvent.layout;
    this.props.cardHeight = !cardHeight ? heihgt : cardHeight;
  }

  onPress = () => {
    const { isExtend } = this.state;
    if (!isExtend) {
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          500, 
          LayoutAnimation.Types.easeInEaseOut, 
          LayoutAnimation.Properties.opacity
      ));
    } else {
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          100, 
          LayoutAnimation.Types.easeInEaseOut, 
          LayoutAnimation.Properties.opacity
      ));
    }

    this.setState({ 
      isExtend: !isExtend, 
      height: this.extendedHeight(isExtend)
    });
  }

  renderButton = (title: string) => (
    <Button>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  )

  renderPrimaryContent = () => {
    const { isExtend } = this.state;
    return (
      <Animated.View>
      <ContentContainer focused={isExtend}> 
        <TagContainer>
          <Icon name='assignment' color='lightgray' size={16} />
          <Tag focused={isExtend}>{tagText}</Tag>
        </TagContainer>
        <MainTitle focused={isExtend}>{mainText}</MainTitle>
        {isExtend && <Description>{detailText}</Description>}
        {isExtend && this.renderButton('Read')}
      </ContentContainer>
      </Animated.View>
    )
  }

  render() {
    const { isExtend } = this.state;
    return (
      <Container 
        onPress={this.onPress} 
        onLayout={this.onCardLayoutChange} 
        style={{ height: this.state.height }}
      >
        <BGImageContaienr
          source={require('../../../images/card.png')}
          imageStyle={style.image}
        >
        {this.renderPrimaryContent()}
        </BGImageContaienr>
      </Container>
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
