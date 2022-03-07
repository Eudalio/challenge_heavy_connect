import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {observer} from 'mobx-react-lite';

import {useStore} from '~/stores/hooks';
import {Icon} from '../Icon';
import {Container, BtnFilterName, BtnFilterNameText} from './styles';

export const FilterBar = observer(() => {
	const {tractors: store} = useStore();
	const {sortByName} = store;
	return (
		<Container>
			<Icon>
				<Icons name="funnel-outline" size={22} color="#fff" />
			</Icon>
			<BtnFilterName onPress={() => sortByName()}>
				<BtnFilterNameText>sort by name</BtnFilterNameText>
			</BtnFilterName>
		</Container>
	);
});
