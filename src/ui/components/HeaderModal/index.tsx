import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {PropsHeaderModal} from './types';
import {Container, HeaderTitleModal, HeaderModalIcon} from './styles';

export const HeaderModal = ({title, closeModal}: PropsHeaderModal) => {
	return (
		<Container>
			<HeaderTitleModal>{title}</HeaderTitleModal>
			<HeaderModalIcon onPress={() => closeModal.current.close()}>
				<Icon name="close-outline" size={35} color="#fff" />
			</HeaderModalIcon>
		</Container>
	);
};
