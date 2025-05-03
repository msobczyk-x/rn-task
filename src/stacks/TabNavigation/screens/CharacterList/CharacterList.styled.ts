import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	listDivider: {
		height: 24,
	},
	listContainer: {
		padding: 16,
	},
	list: {
		backgroundColor: theme.colors.background,
	},
});
