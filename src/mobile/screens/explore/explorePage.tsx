import React, { PureComponent } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';
import { TabBarView, Card } from '../../components';

class ExplorePage extends PureComponent {
  state = {
    items: [1, 2, 3, 4]
  }

  routes = () => {
    // TODO: components should be container with different data source
    return [ 
      { title: 'Latest', component: this.renderSection },
      { title: 'Featured', component: this.renderSection },
      { title: 'Try This', component: this.renderSection },
      { title: 'My List', component: this.renderSection },
    ];
  }

  renderSection = () => {
    const { items } = this.state;
    return (
      <FlatList
        data={items}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => <Card />}
      />
    );
  }

  render() {
    return (
      <TabBarView routeCofnigs={this.routes()} />
    );
  }
}

export default ExplorePage;
