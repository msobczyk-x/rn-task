import {Typography} from '@/components/ui/Typography';
import {theme} from '@/constants/theme';
import httpClient from '@/lib/httpClient';
import useCharacterDetails from '@/services/api/useCharacterDetails';
import {type RouteProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
	ActivityIndicator,
	ScrollView,
	TouchableOpacity,
	View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {styles} from './CharacterDetails.styled';
import {CharacterCard} from './components/CharacterCard';

type CharacterDetailsScreenProps = {
	route: RouteProp<CharacterDetailsStackParamList, 'CharacterDetailsScreen'>;
};

const CharacterDetailsScreen = ({route}: CharacterDetailsScreenProps) => {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();
	const {characterId} = route.params;
	const {data, isLoading} = useCharacterDetails(httpClient, characterId);

	return (
		<ScrollView
			style={[styles.scrollView]}
			contentContainerStyle={[styles.container]}
			contentInset={{bottom: insets.bottom + 16}}>
			<TouchableOpacity
				style={styles.headerButton}
				onPress={() => navigation.goBack()}>
				<View style={styles.textContainer}>
					<Typography variant="bodyTextSmall" style={styles.headerButtonText}>
						{'<- Go back to Characters List'}
					</Typography>
					<View style={styles.customUnderline} />
				</View>
			</TouchableOpacity>
			{isLoading ? (
				<View style={styles.loadingContainer}>
					<ActivityIndicator size="large" color={theme.colors.darkGreen} />
				</View>
			) : data ? (
				<CharacterCard character={data} isLiked={true} onLikePress={() => {}} />
			) : (
				<View style={styles.loadingContainer}>
					{' '}
					<Typography variant="bodyText">Invalid Character ID</Typography>
				</View>
			)}
		</ScrollView>
	);
};

export default CharacterDetailsScreen;
