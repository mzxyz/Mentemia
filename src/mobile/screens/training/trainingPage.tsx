import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import RowItem from '../../components/row-item'
import TabBarView from '../../components/tabBarView/';

const dataSource = [
  { title: 'Worry map', subTitle:'Let go of worry', icon:'grade' },
  { title: 'Breath training', subTitle:'A superb way to control stress', icon:'polymer' },
  { title: 'Be kind', subTitle:'Each day brings a new opportunity', icon:'subject' },
  { title: 'Mood tracker', subTitle:'Track your mood every day', icon:'grade' },
];

class TrainingPage extends PureComponent {
  state = { items: dataSource }

  routes = () => ([ 
    { title: 'Tools', component: this.TrainingView },
  ]);

  renderRowItem = (item) => {
    const { title, subTitle, icon } = item;
    return (
      <RowItem
        key={title}
        title={title} 
        subTitle={subTitle} 
        iconName={icon} 
        iconColor={'#547cfe'} 
      />
    );
  }

  TrainingView = () => {
    const { items } = this.state;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fbfbfd'}}>
        {items.map(this.renderRowItem)}
      </ScrollView>
    );
  }

  render() {
    return (
      <TabBarView routeCofnigs={this.routes()} />
    )
  }
}

export default TrainingPage;
