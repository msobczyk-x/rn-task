import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainStack} from './src/stacks/Main';

function App(): React.JSX.Element {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<MainStack />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
