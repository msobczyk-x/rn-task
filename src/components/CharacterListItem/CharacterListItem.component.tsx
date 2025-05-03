import type {CharacterStatus} from '@/types/api';
import {useMemo} from 'react';
import {View} from 'react-native';
import Card from '../ui/Card';
import {styles} from './CharacterListItem.styled';

type CharacterListItemProps = {
	characterId: string;
	name: string;
	status: CharacterStatus;
	species: string;
	image: string;
};

const CharacterListItem = ({
	characterId,
	name,
	status,
	species,
	image,
}: CharacterListItemProps) => {
	const isLiked = useMemo(() => {}, [characterId]);
	return (
		<Card style={[styles.cardContainer]}>
			<View style={styles.featuresContainer}>
				<Card.Feature label="Name" value={name} />
				<Card.Feature label="Status" value={status} />
				<Card.Feature label="Species" value={species} />
			</View>
			<Card.Image imageUrl={image} />
		</Card>
	);
};

export default CharacterListItem;
