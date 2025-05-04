import {StarContained, StarOutlined} from '@/components/icons';
import {Button} from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {theme} from '@/constants/theme';
import {likedCharactersActions, likedCharactersAtom} from '@/stores/likes';
import type {Character} from '@/types/api';
import {useAtom, useAtomValue} from 'jotai';
import {useMemo} from 'react';
import {View} from 'react-native';
import {styles} from './CharacterCard.styled';

type CharacterCardProps = {
	character: Character;
};
const CharacterCard = ({character}: CharacterCardProps) => {
	const {likedCharacters} = useAtomValue(likedCharactersAtom);
	const [, toggleLike] = useAtom(likedCharactersActions.like);
	const isLiked = useMemo(() => {
		if (!likedCharacters) return false;
		return likedCharacters.includes(character.id);
	}, [character, likedCharacters]);

	return (
		<Card style={styles.cardContainer}>
			<Card.Image imageUrl={character.image} variant="large" />
			<Card.Name name={character.name} />
			<View style={styles.featuresContainer}>
				<View style={styles.featuresRow}>
					<Card.Feature
						style={styles.feature}
						label="Status"
						value={character.status}
					/>
					<Card.Feature
						style={styles.feature}
						label="Origin"
						value={character.origin.name}
					/>
				</View>
				<View style={styles.featuresRow}>
					<Card.Feature
						style={styles.feature}
						label="Species"
						value={character.species}
					/>
					<Card.Feature
						style={styles.feature}
						label="Gender"
						value={character.gender}
					/>
				</View>
			</View>
			<Button
				text={isLiked ? 'Remove from liked' : 'Add to liked'}
				icon={
					isLiked ? (
						<StarContained color={theme.colors.accent} />
					) : (
						<StarOutlined color={theme.colors.white} />
					)
				}
				variant="contained"
				pressed={isLiked}
				onPress={() => toggleLike(character.id)}
			/>
		</Card>
	);
};

export default CharacterCard;
