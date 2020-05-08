import React, { PureComponent } from 'react';
import PersonalityContainer from '../personality';
import { TabBarView } from '../../components';

// pure element is enough instead of class
class ProfilePage extends PureComponent {
  routes = () => {
    return [ 
      { title: 'Personality', component: PersonalityContainer },
      { title: 'Mood', component: PersonalityContainer },
      { title: 'Account', component: PersonalityContainer },
    ];
  }

  render() {
    return (
      <TabBarView routeCofnigs={this.routes()} />
    );
  }
}

export default ProfilePage;
