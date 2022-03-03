import React, {
	useState,
	forwardRef,
	useImperativeHandle,
	useCallback,
} from 'react';
import {Modal} from 'react-native';

type TypeModal = {
	children: React.ReactElement | null;
	defaultOpened?: boolean;
};

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

		return isOpen ? <Modal animationType="slide">{children}</Modal> : null;
	},
);
