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
  Description, 
  Button,
  ButtonTitle,
  FavoriteContainer,
} from './style';
import Icon from '../icon/';
import FavoriteIcon from '../favorite-icon';
import TagView from '../tag-view';

const { UIManager } = NativeModules;

// TODO: need to be refactor

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

type Props = {
  key: string,
  title: string,
  subTitle: string,
  tag: string,
  isFavorite: boolean,
  imageSource: { uri: string } | number,
  onFavoriteChanged : (selected: boolean) => void,
  onPress : () => void,
}

const Card: React.FC<Props> = ({
  title,
  subTitle,
  tag,
  isFavorite,
  imageSource,
  onFavoriteChanged,
  onPress
}) => {
  const [isExtend, setIsExtend] = useState(false);
  const [height, setHeight] = useState(300);
  
  function onChange() {
    LayoutAnimation.configureNext(
        LayoutAnimation.create(
        300, 
        LayoutAnimation.Types.easeIn, 
        LayoutAnimation.Properties.opacity
    ));
    setIsExtend(!isExtend);
    setHeight(isExtend ? 300 : 450)
  }

  const renderButton = (title: string) => (
    <Button onPress={onPress}>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  )

  const renderPrimaryContent = () => (
    <ContentContainer focused={isExtend}> 
      <TagView isFocused={isExtend} text={tag} />
      <MainTitle focused={isExtend}>{title}</MainTitle>
      {isExtend && <Description>{subTitle}</Description>}
      {isExtend && renderButton('Read')}
    </ContentContainer>
  )

  return (
    <TouchableWithoutFeedback onPress={onChange} >
      <Container height={height}>
        <BGImageContaienr
          source={imageSource}
          imageStyle={style.image}
        >
          {renderPrimaryContent()}
        </BGImageContaienr>
        <FavoriteContainer>
          <FavoriteIcon
            isFavorite={isFavorite} 
            onPress={selected => onFavoriteChanged(selected)} 
          />
        </FavoriteContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  image: {
    borderRadius: 20,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth
  }
});

export default Card;
