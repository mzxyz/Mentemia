import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { ItemContainer, LabelText, DotView } from './style';
import { useCompare } from '../../../utils/hook';
import Icon from '../icon';

type Props = {
  label: string,
  icon: string,
  isFocused: false,
}

const TabBarItem: React.FC<Props> = ({ label, icon, isFocused }) => {
  const [opacity]= useState(new Animated.Value(1));
  const [iconY]= useState(new Animated.Value(0));
  const [dotY]= useState(new Animated.Value(60));

  const color = isFocused ? '#547cfe' : '#d2d2d4'; 
  const isFocusChanged = useCompare(isFocused);
  
  const transformStyle = (translateY: Animated.Value) => ({
    transform : [{ translateY }]
  });

  useEffect(() => {
    if (isFocusChanged) {
      triggerAnimation();
    }
  });

  function startAnimation(
    origin: Animated.Value, 
    toValue: number, 
    duration = 400
  ) {
    Animated.timing(
      origin,
      {
        toValue,
        duration,
        useNativeDriver: true,
      }
    ).start();
  }

  function triggerAnimation() {
    startAnimation(opacity, !isFocused ? 1 : 0, 300);
    startAnimation(iconY, !isFocused ? 0 : -5);
    startAnimation(dotY, !isFocused ? 50 : 0);
  }

  return (
    <ItemContainer>
      <Animated.View style={{...transformStyle(iconY)}}>
        <Icon name={icon} color={color} size={26} />
      </Animated.View>
      <DotView style={{...transformStyle(dotY)}} />
      <LabelText style={{ opacity }} color={color}>{label}</LabelText>
    </ItemContainer>
  );
}

export default TabBarItem;
