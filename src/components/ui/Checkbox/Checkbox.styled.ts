import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 4,
		gap: 8,
	},
	checkbox: {
		width: 16,
		height: 16,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
	},
	uncheckedBox: {
		backgroundColor: theme.colors.white,
		borderColor: theme.colors.greyishGreen,
	},
	checkedBox: {
		backgroundColor: theme.colors.darkGreen,
		borderColor: theme.colors.darkGreen,
	},
	checkmark: {
		color: theme.colors.white,
		fontSize: 12,
		fontWeight: 'bold',
	},
	label: {
		color: theme.colors.darkGreen,
	},
});
