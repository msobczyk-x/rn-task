import {Star} from '@/components/icons';
import {Button} from '@/components/ui/Button';
import {theme} from '@/constants/theme';
import type {CharacterStatus} from '@/types/api';
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
	const isLiked = useMemo(() => {
		return false;
	}, [characterId]);

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
									<Star variant={'contained'} color={theme.colors.accent} />
								) : (
									<Star variant={'outlined'} color={theme.colors.primary} />
								)
							}
							variant="outlined"
							pressed={isLiked}
						/>
					}
				/>
			</Card>
		</TouchableOpacity>
	);
};

export default CharacterListItem;
