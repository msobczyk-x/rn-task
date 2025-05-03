import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: 'auto',
		minHeight: 55,
		padding: 8,
		gap: 4,
	},
	labelText: {
		color: theme.colors.mediumGreen,
		textTransform: 'uppercase',
	},
	valueText: {
		color: theme.colors.darkGreen,
		flex: 1,
		flexShrink: 1,
	},
});
