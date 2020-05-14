import React, { PureComponent } from 'react';
import PersonalityContainer from '../personality';
import { TabBarView } from '../../components';

const ProfilePage: React.FC<{}> = () => {
	const routes = [
		{ title: 'Personality', component: PersonalityContainer },
		{ title: 'Mood', component: PersonalityContainer },
		{ title: 'Account', component: PersonalityContainer },
	];

	return <TabBarView routeCofnigs={routes} />;
};

export default ProfilePage;
