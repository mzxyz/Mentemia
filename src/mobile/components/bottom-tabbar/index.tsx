import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import TabBarItem from './tabBarItem';
import { Container } from './style';

const BottomTabBar = ({ state, descriptors, navigation }) => {
  const onPressNavigation = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  }

  const onLongPressNavigation = (route) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  }

  const renderTabBar = (route, index) => {
    const { options } = descriptors[route.key];
    const label = route.name || options.title;
    const icon = options.tabBarLabel;
    const isFocused = state.index === index;

    return (
      <TouchableWithoutFeedback  
        onPress={() => onPressNavigation(route, isFocused)} 
        onLongPress={() => onLongPressNavigation(route)}
        key={label}
      >
      <Container>
        <TabBarItem
          label={label} 
          icon={icon} 
          isFocused={isFocused} 
        />
      </Container>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map(renderTabBar)}
    </View>
  );
}

export default BottomTabBar;
