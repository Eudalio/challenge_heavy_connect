import React, {useRef, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import {
	Container,
	TextInput,
	Form,
	LabelInput,
	GroupButtons,
	Button,
	ButtonText,
	BtnDate,
	BtnDateText,
} from './styles';
import colors from '../../themes/colors';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../../stores';
import {TractorType} from '../../../stores/tractor';

export const FormAddTractor = observer(({closeModal}) => {
	const {tractors: store} = useStore();
	const {addTractor} = store;
	const inputIDRef = useRef();
	const inputHorsePowerRef = useRef();
	const inputBrandRef = useRef();
	const [date, setDate] = useState(new Date());
	const [openDatepicker, setOpenDatepicker] = useState(false);

	const {
		control,
		handleSubmit,
		formState: {errors, isValid},
	} = useForm({
		defaultValues: {
			name: '',
			id: '',
			horsePower: '',
			brand: '',
		},
		mode: 'onBlur',
	});
	const onSubmit = data => {
		let sendData: TractorType = {
			...data,
			key: String(Math.random()),
			purchaseDate: date,
		};

		addTractor(sendData);
		closeModal.current.close();
	};

	return (
		<Container>
			<Form>
				<LabelInput>Tractor Name</LabelInput>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<TextInput
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

				<LabelInput>ID</LabelInput>
				<Controller
					control={control}
					rules={{
						maxLength: 100,
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<TextInput
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

				<LabelInput>Horse Power</LabelInput>
				<Controller
					control={control}
					rules={{
						maxLength: 100,
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<TextInput
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

				<LabelInput>Brand</LabelInput>
				<Controller
					control={control}
					rules={{
						maxLength: 100,
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<TextInput
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

				<LabelInput>Purchase Date</LabelInput>
				<BtnDate onPress={() => setOpenDatepicker(true)}>
					<BtnDateText>{moment(date).format('MM/DD/YYYY')}</BtnDateText>
				</BtnDate>
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
			</Form>
			<GroupButtons>
				<Button onPress={() => closeModal.current.close()} color="#ABB3BD">
					<ButtonText>cancel</ButtonText>
				</Button>
				<Button onPress={handleSubmit(onSubmit)} color="#52C782">
					<ButtonText>save</ButtonText>
				</Button>
			</GroupButtons>
		</Container>
	);
});
