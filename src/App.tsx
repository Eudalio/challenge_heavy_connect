import React from 'react';
import {ThemeProvider} from 'styled-components';
import Routes from './routes';
import theme from './ui/themes/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
};

export default App;
