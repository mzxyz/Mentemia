import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';

import RowItem from '../../components/row-item'
import TextRowItem from '../../components/text-row-item'

// TODO: better move the types to component folder
type Action = {
  title: string,
  subTitle: string,
  icon: string
};

type Content = {
  title: string,
  content: string
};

type Props = {
  actions: Array<Action>,
  contents: Array<Content>,
  onRequestData: () => void
};

class HomePage extends PureComponent<Props> {
  componentDidMount() {
    const { onRequestData } = this.props;
    onRequestData();
  }

  renderActions = (item: Action, index: number) => {
    const { title, subTitle, icon } = item;
    return (
      <RowItem
        key={`${title}${index}`} 
        title={title} 
        subTitle={subTitle} 
        iconName={icon} 
        iconColor={'#547cfe'} 
      />
    );
  }

  renderContents = (item: Content, index: number) => {
    const { title, content } = item;
    return (
      <TextRowItem 
        key={`${title}${index}`} 
        title={title}
        content={content} 
      />
    );
  }

  HomeView = () => {
    const { actions, contents } = this.props;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fbfbfd'}}>
        {actions.map(this.renderActions)}
        {contents.map(this.renderContents)}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.HomeView()}
      </View>
    )
  }
}

export default HomePage;
