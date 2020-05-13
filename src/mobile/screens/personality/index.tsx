import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';
import { AnimatedRowItem } from '../../components';

const PersonalityPage: React.FC<{}> = () => {
  const items = [1, 2, 3, 4, 5];   
  return (
    <ScrollView > 
      {items.map((value: number) => (
        <AnimatedRowItem
          key={`key ${value}`}
          title={`Part ${value}`} 
          subTitles={['View report', 'Hide report']} 
          subTitleColor={'#547cfe'}
          iconName={'subject'} 
          iconColor={'#37de98'} 
        />
      ))}
    </ScrollView>
  );
}

export default PersonalityPage;
