import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';
import { AnimatedRowItem } from '../../components';

class PersonalityPage extends PureComponent {

  renderRowItem = (_, index) => (
    <AnimatedRowItem
      key={`key${index}`}
      title={`Part ${index+1}`} 
      subTitles={['View report', 'Hide report']} 
      subTitleColor={'#547cfe'}
      iconName={'subject'} 
      iconColor={'#37de98'} 
    />
  );

  render() {
    const items = [1, 2, 3, 4, 5];   
    return (
      <ScrollView > 
        {items.map(this.renderRowItem)}
      </ScrollView>
    );
  }
}

export default PersonalityPage;
