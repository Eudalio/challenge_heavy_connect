import React from 'react';
import {statusColors} from '~/utils/statusToColor';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import {PAGES} from '~/routes/types';
import {useStore} from '~/stores/hooks';

export const TractorItem = item => {
	const {tractors: store} = useStore();
	const navigation = useNavigation();
	const {setCurrentTractor} = store;

	return (
		<S.TractorBox
			onPress={() => {
				setCurrentTractor(item);
				navigation.navigate(PAGES.DETAILS);
			}}>
			<S.SectionTractorPicture>
				<S.TractorPicture
					source={require('../../../assets/icons/tractor.jpeg')}
					resizeMode="contain"
				/>
			</S.SectionTractorPicture>
			<S.TractorInfo>
				<S.TractorName>{item.name}</S.TractorName>
				<S.TractorID>{item.id}</S.TractorID>
				<S.TractorStatus>
					<S.TractorStatusColor color={statusColors[item.status]} />
					<S.TractorStatusText>{item.status}</S.TractorStatusText>
				</S.TractorStatus>
			</S.TractorInfo>
		</S.TractorBox>
	);
};
