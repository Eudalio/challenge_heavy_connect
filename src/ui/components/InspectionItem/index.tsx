import moment from 'moment';
import React, {useRef} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import FAIcons from 'react-native-vector-icons/FontAwesome5';

import {ModalScreen} from '~/ui/components/Modal';
import {ModalInspection} from '~/ui/pages/Modal/ModalInspection';

import {statusColors} from '~/utils/statusToColor';
import {useStore} from '~/stores/hooks';
import * as S from './styles';

export const InspectionItem = item => {
	const modalInspectionEdit = useRef(null);
	const {tractors: store} = useStore();
	const {setCurrentInspection} = store;
	return (
		<S.TractorInpectionsItem>
			<Icons name="chevron-down-outline" color={'#0C65C4'} size={25} />
			<S.TractorInpectionsItemInfos>
				<S.TractorStatus>
					<S.TractorStatusColor color={statusColors[item.status]} />
					<S.TractorStatusText>{item.status}</S.TractorStatusText>
				</S.TractorStatus>
				<S.TractorStatus>
					<Icons name="calendar-outline" size={18} />
					<S.TractorStatusText>
						{moment(item.date).format('MM/DD/YYYY')}
					</S.TractorStatusText>
				</S.TractorStatus>
			</S.TractorInpectionsItemInfos>
			<S.TractorActionButton
				onPress={() => {
					setCurrentInspection(item);
					modalInspectionEdit.current.open();
				}}>
				<FAIcons style={{color: '#fff'}} name="pen" size={18} />
			</S.TractorActionButton>
			<ModalScreen ref={modalInspectionEdit}>
				<ModalInspection closeModal={modalInspectionEdit} type="edit" />
			</ModalScreen>
		</S.TractorInpectionsItem>
	);
};
