import {View} from 'react-native';
import type {StyleProp, ViewStyle} from 'react-native';
import {Typography} from '../../Typography';
import {styles} from './CardFeature.styled';
type CardFeatureProps = {
	label: string;
	value: string;
	style?: StyleProp<ViewStyle>;
};
const CardFeature = ({label, value, style}: CardFeatureProps) => {
	return (
		<View style={[styles.container, style]}>
			<Typography style={styles.labelText} variant="labelSmall">
				{label}
			</Typography>
			<View style={{flexDirection: 'row'}}>
				<Typography style={styles.valueText} variant="bodyText">
					{value}
				</Typography>
			</View>
		</View>
	);
};

export default CardFeature;
