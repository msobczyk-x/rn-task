import {StarContained, StarOutlined} from '@/components/icons';
import {Button} from '@/components/ui/Button';
import {theme} from '@/constants/theme';
import {likedCharactersActions, likedCharactersAtom} from '@/stores/likes';
import type {CharacterStatus} from '@/types/api';
import {useAtomValue} from 'jotai';
import {useAtom} from 'jotai';
import {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Card from '../../../../../components/ui/Card';
import {styles} from './CharacterListItem.styled';

type CharacterListItemProps = {
	characterId: number;
	name: string;
	status: CharacterStatus;
	species: string;
	image: string;
	onPress?: () => void;
};

const CharacterListItem = ({
	characterId,
	name,
	status,
	species,
	image,
	onPress,
}: CharacterListItemProps) => {
	const {likedCharacters} = useAtomValue(likedCharactersAtom);
	const [, toggleLike] = useAtom(likedCharactersActions.like);
	const isLiked = useMemo(() => {
		if (!likedCharacters) return false;
		return likedCharacters.includes(characterId);
	}, [characterId, likedCharacters]);

	return (
		<TouchableOpacity onPress={onPress}>
			<Card style={[styles.cardContainer]}>
				<View style={styles.featuresContainer}>
					<Card.Feature label="Name" value={name} />
					<Card.Feature label="Status" value={status} />
					<Card.Feature label="Species" value={species} />
				</View>
				<Card.Image
					imageUrl={image}
					button={
						<Button
							text={'Like'}
							icon={
								isLiked ? (
									<StarContained color={theme.colors.accent} />
								) : (
									<StarOutlined color={theme.colors.primary} />
								)
							}
							variant="outlined"
							pressed={isLiked}
							onPress={() => toggleLike(characterId)}
						/>
					}
				/>
			</Card>
		</TouchableOpacity>
	);
};

export default CharacterListItem;
