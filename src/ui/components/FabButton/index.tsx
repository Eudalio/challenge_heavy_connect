import React, {useRef} from 'react';
import {ModalTractor} from '~/ui/pages/Modal/ModalTractor';
import {ModalScreen} from '~/ui/components/Modal';

import {TypeFabButton} from './types';
import {Container, FabText} from './styles';

export const FabButton = ({title}: TypeFabButton) => {
	const modalAddTractor = useRef(null);
	return (
		<>
			<Container onPress={() => modalAddTractor.current.open()}>
				<FabText>{title}</FabText>
			</Container>
			<ModalScreen ref={modalAddTractor}>
				<ModalTractor closeModal={modalAddTractor} type="register" />
			</ModalScreen>
		</>
	);
};
