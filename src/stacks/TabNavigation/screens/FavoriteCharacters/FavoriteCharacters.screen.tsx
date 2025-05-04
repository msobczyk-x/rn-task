import {Typography} from '@/components/ui/Typography';
import httpClient from '@/lib/httpClient';
import useLikedCharacters from '@/services/api/useLikedCharactersList';
import {CharacterListItem} from '@/stacks/TabNavigation/screens/components/CharacterListItem';
import {searchQueryAtom} from '@/stores/filters';
import {likedCharactersAtom} from '@/stores/likes';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {useAtomValue} from 'jotai';
import React, {useMemo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import type {MainStackNavigationProp} from '../../../Main/Main.routes';
import {CharacterListHeader} from '../components/CharacterListHeader';
import {styles} from './FavoriteCharacters.styled';

const FavoriteCharacters = () => {
	const searchQuery = useAtomValue(searchQueryAtom);
	const {likedCharacters} = useAtomValue(likedCharactersAtom);
	const {navigate} = useNavigation<MainStackNavigationProp>();
	const {data, isLoading, isRefetching, refetch} = useLikedCharacters(
		httpClient,
		likedCharacters,
	);

	const filteredData = useMemo(() => {
		if (!data) return [];

		const dataArray = Array.isArray(data) ? data : [data];

		if (!searchQuery) return dataArray;

		return dataArray.filter(item =>
			item.name.toLowerCase().includes(searchQuery.toLowerCase()),
		);
	}, [data, searchQuery]);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<CharacterListHeader />
			</View>
			<FlashList
				data={filteredData}
				estimatedItemSize={224}
				contentContainerStyle={styles.listContainer}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={styles.listDivider} />}
				onRefresh={() => refetch()}
				refreshing={isRefetching}
				ListEmptyComponent={() =>
					isLoading ? (
						<ActivityIndicator size={'large'} />
					) : (
						<View style={styles.emptyListContainer}>
							<Typography variant="bodyText">No characters found</Typography>
						</View>
					)
				}
				renderItem={({item}) => (
					<CharacterListItem
						name={item.name}
						characterId={item.id}
						status={item.status}
						image={item.image}
						species={item.species}
						onPress={() =>
							navigate('CharacterDetailsStack', {
								screen: 'CharacterDetailsScreen',
								params: {characterId: item.id},
							})
						}
					/>
				)}
			/>
		</View>
	);
};

export default FavoriteCharacters;
