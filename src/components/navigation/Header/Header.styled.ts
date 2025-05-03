import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	headerContainer: {
		paddingHorizontal: 16,
		paddingVertical: 24,
		justifyContent: 'center',
		backgroundColor: theme.colors.darkGreen,
	},
	wrapper: {
		backgroundColor: theme.colors.darkGreen,
	},
});
