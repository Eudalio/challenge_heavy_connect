import React, {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {observer} from 'mobx-react-lite';
import Icons from 'react-native-vector-icons/Ionicons';
import FAIcons from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';

import colors from '~/ui/themes/colors';
import {useStore} from '~/stores/hooks';
import {InspectionType, STATUS} from '~/stores/types';
import {PropsModal} from '~/ui/pages/Modal/types';
import * as S from './styles';

export const FormInspection = observer(({closeModal, type}: PropsModal) => {
	const {tractors: store} = useStore();
	const {addInspection, currentInspection, editInspection, removeInspection} =
		store;
	const [date, setDate] = useState(
		type === 'edit' ? currentInspection.date : new Date(),
	);
	const [openDatepicker, setOpenDatepicker] = useState(false);
	const [details, setDetails] = useState(
		type === 'edit' ? currentInspection.details : '',
	);
	const [statusInspection, setStatusInspection] = useState<STATUS>('Good');
	const [statusGoodActive, setStatusGoodActive] = useState(
		type === 'edit' && currentInspection.status === 'Good' ? true : false,
	);
	const [statusRepairActive, setStatusRepairActive] = useState(
		type === 'edit' && currentInspection.status === 'Need Repair'
			? true
			: false,
	);
	const [statusBrokenActive, setStatusBrokenActive] = useState(
		type === 'edit' && currentInspection.status === 'Broken' ? true : false,
	);

	const onSubmit = () => {
		if (type === 'register') {
			let sendData: InspectionType = {
				id: String(Math.random()),
				date: date,
				details: details,
				status: statusInspection,
			};
			addInspection(sendData);
		} else {
			let sendData: InspectionType = {
				...currentInspection,
				date: date,
				details: details,
				status: statusInspection,
			};
			editInspection(sendData);
		}
		closeModal.current.close();
	};

	const handleDelete = () => {
		removeInspection(currentInspection);
		closeModal.current.close();
	};

	const setStatus = nameBtn => {
		switch (nameBtn) {
			case 'good':
				setStatusGoodActive(!statusGoodActive);
				setStatusRepairActive(false);
				setStatusBrokenActive(false);
				setStatusInspection('Good');
				break;
			case 'repair':
				setStatusGoodActive(false);
				setStatusRepairActive(!statusRepairActive);
				setStatusBrokenActive(false);
				setStatusInspection('Need Repair');
				break;
			case 'broken':
				setStatusGoodActive(false);
				setStatusRepairActive(false);
				setStatusBrokenActive(!statusBrokenActive);
				setStatusInspection('Broken');
				break;
		}
	};

	return (
		<S.Container>
			<S.Form>
				<S.LabelInput>Status</S.LabelInput>
				<S.GroupStatus>
					<S.StatusBtn
						onPress={() => setStatus('good')}
						style={{marginLeft: 0}}
						color={colors.goodStatus}
						isActive={statusGoodActive}>
						{statusGoodActive ? (
							<FAIcons style={{color: '#fff'}} name="check" size={25} />
						) : null}
						<S.StatusBtnText>good</S.StatusBtnText>
					</S.StatusBtn>
					<S.StatusBtn
						onPress={() => setStatus('repair')}
						color={colors.repairStatus}
						isActive={statusRepairActive}>
						{statusRepairActive ? (
							<FAIcons style={{color: '#fff'}} name="check" size={25} />
						) : null}
						<S.StatusBtnText>need repair</S.StatusBtnText>
					</S.StatusBtn>
					<S.StatusBtn
						onPress={() => setStatus('broken')}
						color={colors.brokenStatus}
						isActive={statusBrokenActive}>
						{statusBrokenActive ? (
							<FAIcons style={{color: '#fff'}} name="check" size={25} />
						) : null}
						<S.StatusBtnText>broken</S.StatusBtnText>
					</S.StatusBtn>
				</S.GroupStatus>

				<S.LabelInput>Date</S.LabelInput>
				<S.BtnDate onPress={() => setOpenDatepicker(true)}>
					<S.BtnDateText>{moment(date).format('MM/DD/YYYY')}</S.BtnDateText>
					<View style={{position: 'absolute', right: 10}}>
						<Icons name="calendar-outline" size={22} />
					</View>
				</S.BtnDate>
				<DatePicker
					modal={true}
					open={openDatepicker}
					date={date}
					locale="en"
					theme="light"
					mode="date"
					onConfirm={date => {
						setOpenDatepicker(false);
						setDate(date);
					}}
					onCancel={() => {
						setOpenDatepicker(false);
					}}
				/>

				<S.LabelInput>Details</S.LabelInput>
				<S.TextInput
					placeholder="Add comment"
					placeholderTextColor={colors.placeholderInput}
					returnKeyType="done"
					multiline
					numberOfLines={3}
					value={details}
					onChangeText={text => setDetails(text)}
				/>
			</S.Form>
			<S.GroupButtons>
				{type === 'edit' ? (
					<S.Button onPress={() => handleDelete()} color="#ABB3BD">
						<S.ButtonText>delete</S.ButtonText>
					</S.Button>
				) : null}
				<S.Button onPress={() => onSubmit()} color="#52C782">
					<S.ButtonText>save</S.ButtonText>
				</S.Button>
			</S.GroupButtons>
		</S.Container>
	);
});
