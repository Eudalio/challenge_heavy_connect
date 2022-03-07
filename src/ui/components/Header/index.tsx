import React from 'react';

import * as S from './style';

export const Header = ({...props}) => (
	<S.Container>{props.children}</S.Container>
);
