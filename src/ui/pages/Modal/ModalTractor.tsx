import React from 'react';
import {FormTractor} from '~/ui/components/FormTractor';
import {HeaderModal} from '~/ui/components/HeaderModal';
import {PropsModal} from './types';

export const ModalTractor = ({closeModal, type}: PropsModal) => (
	<>
		<HeaderModal
			title={type === 'register' ? 'Add Tractor' : 'Edit Tractor'}
			closeModal={closeModal}
		/>
		<FormTractor closeModal={closeModal} type={type} />
	</>
);
