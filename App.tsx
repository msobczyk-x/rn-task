import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainStack} from './src/stacks/Main';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
	return (
		<SafeAreaProvider>
			<QueryClientProvider client={queryClient}>
				<NavigationContainer>
					<MainStack />
				</NavigationContainer>
			</QueryClientProvider>
		</SafeAreaProvider>
	);
}

export default App;
