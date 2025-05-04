import {Typography} from '@/components/ui/Typography';
import {theme} from '@/constants/theme';
import httpClient from '@/lib/httpClient';
import useCharactersList from '@/services/api/useCharactersList';
import {CharacterListItem} from '@/stacks/TabNavigation/screens/components/CharacterListItem';
import {searchQueryAtom} from '@/stores/filters';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {useAtomValue} from 'jotai';
import React, {useCallback, useMemo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import type {MainStackNavigationProp} from '../../../Main/Main.routes';
import {CharacterListHeader} from '../components/CharacterListHeader';
import {styles} from './CharacterList.styled';

const CharacterListScreen = () => {
	const searchQuery = useAtomValue(searchQueryAtom);
	const {navigate} = useNavigation<MainStackNavigationProp>();
	const {
		data,
		isLoading,
		isRefetching,
		refetch,
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	} = useCharactersList(httpClient, {
		name: searchQuery,
	});

	const listData = useMemo(
		() => data?.pages.flatMap(data => data.results) || [],
		[data],
	);
	const handleLoadMore = useCallback(() => {
		if (hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	}, [hasNextPage, isFetchingNextPage, fetchNextPage]);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<CharacterListHeader />
			</View>
			<FlashList
				data={listData}
				estimatedItemSize={224}
				contentContainerStyle={styles.listContainer}
				showsVerticalScrollIndicator={false}
				onEndReached={handleLoadMore}
				onEndReachedThreshold={0.5}
				ItemSeparatorComponent={() => <View style={styles.listDivider} />}
				onRefresh={() => refetch()}
				refreshing={isRefetching}
				ListFooterComponent={() => {
					if (isFetchingNextPage) {
						return (
							<ActivityIndicator size="small" color={theme.colors.darkGreen} />
						);
					}
					return null;
				}}
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

export default CharacterListScreen;
