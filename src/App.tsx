import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './ui/themes/theme';
import {rootStore, StoreProvider} from './stores';
import {AppNavigator} from './navigator';

export const App = () => (
	<StoreProvider value={rootStore}>
		<ThemeProvider theme={theme}>
			<AppNavigator />
		</ThemeProvider>
	</StoreProvider>
);
