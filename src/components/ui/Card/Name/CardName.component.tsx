import {View} from 'react-native';
import {Typography} from '../../Typography';
import {styles} from './CardName.styled';
type CardNameProps = {
	name: string;
};

const CardName = ({name}: CardNameProps) => {
	return (
		<View style={[styles.container]}>
			<Typography variant="labelSmall" style={styles.labelText}>
				Label
			</Typography>
			<Typography variant="heading" style={styles.valueText}>
				{name}
			</Typography>
		</View>
	);
};

export default CardName;
