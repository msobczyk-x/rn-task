import {View} from 'react-native';
import {Typography} from '../../Typography';
import {styles} from '../Feature/CardFeature.styled';
type CardNameProps = {
	name: string;
};

const CardName = ({name}: CardNameProps) => {
	return (
		<View style={[styles.container]}>
			<Typography style={styles.labelText}>Label</Typography>
			<Typography style={styles.valueText}>{name}</Typography>
		</View>
	);
};

export default CardName;
