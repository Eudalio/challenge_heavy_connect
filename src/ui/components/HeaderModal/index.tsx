import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type PropsHeaderModal = {
	title: string;
	icon?: string;
	closeModal: object;
};

import {Container, HeaderTitleModal, HeaderModalIcon} from './styles';

export const HeaderModal = ({title, icon, closeModal}: PropsHeaderModal) => {
	return (
		<Container>
			<HeaderTitleModal>{title}</HeaderTitleModal>
			<HeaderModalIcon onPress={() => closeModal.current.close()}>
				<Icon name={`${icon}`} size={35} color="#fff" />
			</HeaderModalIcon>
		</Container>
	);
};
