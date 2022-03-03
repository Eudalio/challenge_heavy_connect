import React from 'react';
import {SafeAreaView} from 'react-native';
import {FormAddTractor} from '../components/FormAddTractor';
import {HeaderModal} from '../components/HeaderModal';

type PropsAddTractor = {
	closeModal: object;
};

export const AddTractor = ({closeModal}: PropsAddTractor) => {
	return (
		<SafeAreaView>
			<HeaderModal
				title="Add Tractor"
				icon="close-outline"
				closeModal={closeModal}
			/>
			<FormAddTractor closeModal={closeModal} />
		</SafeAreaView>
	);
};
