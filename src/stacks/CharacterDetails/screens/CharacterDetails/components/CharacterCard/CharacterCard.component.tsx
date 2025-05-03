import {Star} from '@/components/icons';
import {Button} from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {theme} from '@/constants/theme';
import type {Character} from '@/types/api';
import {View} from 'react-native';
import {styles} from './CharacterCard.styled';
type CharacterCardProps = {
	character: Character;
	isLiked: boolean;
	onLikePress: () => void;
};
const CharacterCard = ({
	character,
	isLiked,
	onLikePress,
}: CharacterCardProps) => {
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
						<Star variant={'contained'} color={theme.colors.accent} />
					) : (
						<Star variant={'outlined'} color={theme.colors.white} />
					)
				}
				variant="contained"
				pressed={isLiked}
				onPress={onLikePress}
			/>
		</Card>
	);
};

export default CharacterCard;
