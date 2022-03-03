import React, {useRef} from 'react';
import {AddTractor} from '../../pages/AddTractor';
import {ModalScreen} from '../Modal';

import {Container, FabText} from './styles';

type TypeFabButton = {
	title: string;
};

export const FabButton = ({title}: TypeFabButton) => {
	const modalAddTractor = useRef(null);
	return (
		<>
			<Container onPress={() => modalAddTractor.current.open()}>
				<FabText>{title}</FabText>
			</Container>
			<ModalScreen ref={modalAddTractor}>
				<AddTractor closeModal={modalAddTractor} />
			</ModalScreen>
		</>
	);
};
