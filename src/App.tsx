import React from 'react';
import {ThemeProvider} from 'styled-components';
import Routes from './routes';
import theme from './ui/themes/theme';
import {rootStore, StoreProvider} from './stores';

const App = () => {
	return (
		<StoreProvider value={rootStore}>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</StoreProvider>
	);
};

export default App;
