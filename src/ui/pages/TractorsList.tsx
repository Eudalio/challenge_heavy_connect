import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {FilterBar} from '../components/FilterBar';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import {TractorList} from '../components/TractorList';

import {FabButton} from '../components/FabButton';

export const TractorsList = () => {
	return (
		<>
			<SafeAreaView>
				<StatusBar barStyle={'dark-content'} />
				<Header>
					<FilterBar />
					<HeaderTitle />
				</Header>
				<TractorList />
			</SafeAreaView>
			<FabButton title="+" />
		</>
	);
};
