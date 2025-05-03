import {Typography} from '@/components/ui/Typography';
import {View} from 'react-native';
import {styles} from './CharacterListHeader.styled';

const CharacterListHeader = () => {
	return (
		<View style={[styles.container]}>
			<Typography variant="heading">Characters</Typography>
		</View>
	);
};

export default CharacterListHeader;
