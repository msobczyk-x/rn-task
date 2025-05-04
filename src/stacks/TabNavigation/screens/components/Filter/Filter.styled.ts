import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		gap: 8,
		paddingBottom: 32,
	},
	buttonStyle: {
		flexDirection: 'row-reverse',
		paddingLeft: 24,
		paddingRight: 16,
		gap: 8,
	},
	buttonStyleExpanded: {
		backgroundColor: theme.colors.darkGreen,
	},
	filterContainer: {
		backgroundColor: theme.colors.white,
		width: '100%',
		padding: 16,
		gap: 24,
	},
	filterContainerFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	filterContent: {
		gap: 8,
	},
	labelText: {
		color: theme.colors.mediumGreen,
	},
});
