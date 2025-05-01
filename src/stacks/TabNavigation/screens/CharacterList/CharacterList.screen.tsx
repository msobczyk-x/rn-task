import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import type {MainStackNavigationProp} from '../../../Main/Main.routes';
import {styles} from './CharacterList.styled';

const CharacterListScreen = () => {
	const {navigate} = useNavigation<MainStackNavigationProp>();
	return (
		<View style={styles.container}>
			<Text>Implement CharactersListScreen</Text>
			<Button
				title="Navigate to Details screen"
				onPress={(): void => {
					navigate('CharacterDetailsStack', {
						screen: 'CharacterDetailsScreen',
					});
				}}
			/>
		</View>
	);
};

export default CharacterListScreen;
