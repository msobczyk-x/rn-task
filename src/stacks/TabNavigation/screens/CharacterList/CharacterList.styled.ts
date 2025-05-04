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
		paddingHorizontal: 16,
		paddingTop: 0,
		paddingBottom: 16,
	},
	list: {
		backgroundColor: theme.colors.background,
	},
	emptyListContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		padding: 16,
		paddingBottom: 32,
	},
});
