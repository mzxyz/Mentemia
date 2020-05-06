import React, { PureComponent } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';
import Card from '../../components/card';

class ExploreListPage extends PureComponent {
  state = {
    items: [1, 2, 3, 4]
  }

  render() {
    const { items } = this.state;
    return (
      <FlatList
        data={items}
        renderItem={({item}) => <Card key={item} />}
      />
    );
  }
}

export default ExploreListPage;
