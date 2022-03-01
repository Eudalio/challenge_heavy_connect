import React from 'react';

import {Container} from './style';

function Header({...props}): React.ReactElement {
	return <Container>{props.children}</Container>;
}

export default Header;
