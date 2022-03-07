import React from 'react';
import {FormInspection} from '~/ui/components/FormInspection';
import {HeaderModal} from '~/ui/components/HeaderModal';
import {PropsModal} from './types';

export const ModalInspection = ({closeModal, type}: PropsModal) => (
	<>
		<HeaderModal
			title={type === 'register' ? 'New Entry' : 'Edit Entry'}
			closeModal={closeModal}
		/>
		<FormInspection closeModal={closeModal} type={type} />
	</>
);
