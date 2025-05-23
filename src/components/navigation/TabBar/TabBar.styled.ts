import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: theme.colors.darkGreen,
		width: '100%',
	},
	tabItem: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 16,
		backgroundColor: theme.colors.darkGreen,
		gap: 4,
	},
	activeTabItem: {
		backgroundColor: theme.colors.primary,
	},
	tabLabel: {
		color: 'white',
	},
});
