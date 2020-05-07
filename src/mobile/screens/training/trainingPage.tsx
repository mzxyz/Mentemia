import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import { RowItem, TabHeader } from '../../components';

type Project = {
  title: string,
  subTitle: string,
  icon: string
};

type Props = {
  projects: Array<Project>,
  onRequestData: () => void
};

class TrainingPage extends PureComponent<Props> {
  componentDidMount() {
    const { onRequestData } = this.props;
    onRequestData();
  }

  renderRowItem = (item: Project, index: number) => {
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

  render() {
    const { projects } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <TabHeader title="Tools" />
        <ScrollView style={{ flex: 1, backgroundColor: '#fbfbfd'}}>
          {!!projects && projects.map(this.renderRowItem)}
        </ScrollView>
      </View>
    )
  }
}

export default TrainingPage;
