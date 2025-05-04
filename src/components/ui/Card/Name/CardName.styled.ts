import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		minHeight: 80,
		height: 'auto',
		padding: 8,
		gap: 4,
	},
	labelText: {
		color: theme.colors.mediumGreen,
		textTransform: 'uppercase',
	},
	valueText: {
		color: theme.colors.darkGreen,
	},
});
