import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {FilterBar} from '~/ui/components/FilterBar';
import {Header} from '~/ui/components/Header';
import {HeaderTitle} from '~/ui/components/HeaderTitle';
import {TractorList} from '~/ui/components/TractorList';
import {FabButton} from '~/ui/components/FabButton';

export const TractorsList = () => (
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
