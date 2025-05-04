import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: 'column',
		backgroundColor: theme.colors.white,
		gap: 16,
		padding: 24,
	},
	featuresContainer: {
		flexDirection: 'column',
		gap: 16,
	},
	featuresRow: {
		flexDirection: 'row',
		gap: 16,
	},
	feature: {
		flex: 1,
		backgroundColor: theme.colors.lightGreen,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: theme.colors.lightGreen,
	},
});
