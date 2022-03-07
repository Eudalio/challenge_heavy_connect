import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TractorsList} from '~/ui/pages/TractorsList/TractorsList';
import {Details} from '~/ui/pages/Details';

import {PAGES} from './types';

const {Navigator, Screen} = createNativeStackNavigator();

export const Routes = () => {
	return (
		<Navigator screenOptions={{headerShown: false}}>
			<Screen name={PAGES.TRACTORS} component={TractorsList} />
			<Screen name={PAGES.DETAILS} component={Details} />
		</Navigator>
	);
};
