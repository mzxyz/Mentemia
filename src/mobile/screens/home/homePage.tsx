import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import RowItem from '../../components/row-item'
import TextRowItem from '../../components/text-row-item'
import TabBarView from '../../components/tabBarView/';

// TODO: migrate mock data to epics
const dataSource = {
  actions: [
    { title: 'Watch this first', subTitle:'Personality quiz', icon:'grade' },
    { title: 'Watch this first', subTitle:'Personality quiz', icon:'subject' },
  ],
  articles: [
    { title: 'Try this', content: 'Try this: Treat yourself every day' },
    { title: 'Try this', content: 'Try this: Alternate nostril breathing' },
    { title: 'Read this', content: 'Do these things during the day to sleep better at night' },
    { title: 'Watch this', content: 'Guided mindfulness: The Body Scan' },
  ],
};

class HomePage extends PureComponent {
  state = { ...dataSource }

  routes = () => ([ 
    { title: 'Today', component: this.HomeView },
  ]);

  renderActions = (item) => {
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

  renderArticles = (item, index) => {
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
    const { actions, articles } = this.state;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fbfbfd'}}>
        {actions.map(this.renderActions)}
        {articles.map(this.renderArticles)}
      </ScrollView>
    );
  }

  render() {
    return (
      <TabBarView routeCofnigs={this.routes()} />
    )
  }
}

export default HomePage;
