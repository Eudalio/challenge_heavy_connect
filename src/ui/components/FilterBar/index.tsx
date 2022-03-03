import React from 'react';
import {Icon} from '../Icon';
import Icons from 'react-native-vector-icons/Ionicons';

import {Container, BtnFilterName, BtnFilterNameText} from './styles';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../../stores';

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
