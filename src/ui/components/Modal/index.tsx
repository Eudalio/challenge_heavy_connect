import React, {
	useState,
	forwardRef,
	useImperativeHandle,
	useCallback,
} from 'react';
import {Modal, SafeAreaView} from 'react-native';
import {TypeModal} from './types';

export const ModalScreen = forwardRef(
	({children, defaultOpened = false}: TypeModal, ref) => {
		const [isOpen, setIsOpen] = useState(defaultOpened);

		const close = useCallback(() => setIsOpen(false), []);

		useImperativeHandle(
			ref,
			() => ({
				open: () => setIsOpen(true),
				close,
			}),
			[close],
		);

		return isOpen ? (
			<Modal animationType="slide">
				<SafeAreaView>{children}</SafeAreaView>
			</Modal>
		) : null;
	},
);
