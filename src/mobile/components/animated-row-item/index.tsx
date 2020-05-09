import React, { useState } from 'react';
import { 
  Animated, 
  TouchableWithoutFeedback,
  NativeModules, 
  LayoutAnimation,
} from 'react-native';

import { 
  Container,
  RowContainer, 
  ContentContainer,
  IconContainer,
  TextContainer,
  Title,
  SubTitle,
  LabelView,
  DetailContainer,
  DetailText,
} from './style';
import Icon from '../icon';

type Props = {
  title: string,
  subTitle: string,
  subTitleColor: string,
  iconName: string,
  iconColor: string,
  onPress ?: () => void,
};

const text = "If you are the author of this issue and you believe this issue was closed in error (i.e. you have edited your issue to ensure it meets the template requirements), please let us know.";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const AnimatedRowItem = ({ 
  title, 
  subTitle, 
  subTitleColor, 
  iconName, 
  iconColor, 
  onPress
}: Props) => {
  const [radius, setRadius] = useState(30);
  const [isExtend, setExtend] = useState(false);

  function configAnimation() {
    // LayoutAnimation.configureNext(
    //   LayoutAnimation.create(
    //     100, 
    //     LayoutAnimation.Types.linear, 
    //     LayoutAnimation.Properties.opacity
    // ));
  }

  function updateState() {
    setExtend(!isExtend);
    configAnimation();
    setRadius(isExtend ? 30 : 0);
  }

  return (
    <TouchableWithoutFeedback onPress={updateState}>
      <Container>
        <RowContainer>
          <ContentContainer>
            <IconContainer color={iconColor}>
              <Icon name={iconName} color={'white'} size={25} />
            </IconContainer>
            <TextContainer>
              {!!title && <Title>{title}</Title>}
              {!!subTitle && <SubTitle color={subTitleColor}>{subTitle}</SubTitle>}
            </TextContainer>
          </ContentContainer>
          <LabelView color={iconColor} radius={radius} />
        </RowContainer>
        {isExtend && 
          <DetailContainer>
            <DetailText>{text}</DetailText>
          </DetailContainer>
        }
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default AnimatedRowItem;