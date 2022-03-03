import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TractorsList} from '../ui/pages/TractorsList';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{headerShown: false}}>
				<Screen name="Home" component={TractorsList} />
			</Navigator>
		</NavigationContainer>
	);
};

export default Routes;
