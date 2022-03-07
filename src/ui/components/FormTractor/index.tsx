import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import {observer} from 'mobx-react-lite';
import moment from 'moment';
import Icons from 'react-native-vector-icons/Ionicons';

import colors from '~/ui/themes/colors';
import {PropsModal} from '~/ui/pages/Modal/types';
import {useStore} from '~/stores/hooks';
import {TractorType} from '~/stores/types';
import * as S from './styles';

export const FormTractor = observer(({closeModal, type}: PropsModal) => {
	const {tractors: store} = useStore();
	const {addTractor, currentTractor, editTractor, countTractors} = store;
	console.log('current', currentTractor);
	const inputIDRef = useRef();
	const inputHorsePowerRef = useRef();
	const inputBrandRef = useRef();
	const [date, setDate] = useState(
		type === 'edit' ? currentTractor.purchaseDate : new Date(),
	);
	const [openDatepicker, setOpenDatepicker] = useState(false);

	const {control, handleSubmit} = useForm({
		defaultValues: {
			name: type === 'edit' ? currentTractor.name : '',
			id: type === 'edit' ? currentTractor.id : '',
			horsePower: type === 'edit' ? currentTractor.horsePower.toString() : '',
			brand: type === 'edit' ? currentTractor.brand : '',
		},
		mode: 'onBlur',
	});
	const onSubmit = data => {
		if (type === 'register') {
			let sendData: TractorType = {
				...data,
				fieldKey: countTractors + 1,
				purchaseDate: date,
				status: 'Good',
				inspections: [],
			};
			addTractor(sendData);
		} else {
			let sendData: TractorType = {
				...currentTractor,
				...data,
			};
			editTractor(sendData);
		}
		closeModal.current.close();
	};

	return (
		<S.Container>
			<S.Form>
				<S.LabelInput>Tractor Name</S.LabelInput>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<S.TextInput
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Type a short text"
							placeholderTextColor={colors.placeholderInput}
							returnKeyType="next"
							onSubmitEditing={() => {
								inputIDRef.current.focus();
							}}
							blurOnSubmit={false}
						/>
					)}
					name="name"
				/>

				<S.LabelInput>ID</S.LabelInput>
				<Controller
					control={control}
					rules={{
						maxLength: 100,
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<S.TextInput
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Type a ID number"
							placeholderTextColor={colors.placeholderInput}
							returnKeyType="next"
							ref={inputIDRef}
							onSubmitEditing={() => {
								inputHorsePowerRef.current.focus();
							}}
							blurOnSubmit={false}
						/>
					)}
					name="id"
				/>

				<S.LabelInput>Horse Power</S.LabelInput>
				<Controller
					control={control}
					rules={{
						maxLength: 100,
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<S.TextInput
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Type Horse Power"
							placeholderTextColor={colors.placeholderInput}
							keyboardType="numeric"
							returnKeyType="done"
							ref={inputHorsePowerRef}
							onSubmitEditing={() => {
								inputBrandRef.current.focus();
							}}
							blurOnSubmit={false}
						/>
					)}
					name="horsePower"
				/>

				<S.LabelInput>Brand</S.LabelInput>
				<Controller
					control={control}
					rules={{
						maxLength: 100,
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<S.TextInput
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Type a brand name"
							placeholderTextColor={colors.placeholderInput}
							returnKeyType="next"
							ref={inputBrandRef}
						/>
					)}
					name="brand"
				/>

				<S.LabelInput>Purchase Date</S.LabelInput>
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
			</S.Form>
			<S.GroupButtons>
				{type === 'edit' ? (
					<S.Button onPress={() => closeModal.current.close()} color="#ABB3BD">
						<S.ButtonText>cancel</S.ButtonText>
					</S.Button>
				) : null}
				<S.Button onPress={handleSubmit(onSubmit)} color="#52C782">
					<S.ButtonText>save</S.ButtonText>
				</S.Button>
			</S.GroupButtons>
		</S.Container>
	);
});
