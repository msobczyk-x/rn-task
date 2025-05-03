import {theme} from '@/constants/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	base: {
		borderRadius: 24,
		borderWidth: 1,
		borderColor: theme.colors.primary,
		position: 'relative',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
		borderRadius: 24,
	},
	small: {
		minWidth: 200,
		aspectRatio: 1,
	},
	large: {
		width: '100%',
		aspectRatio: 1,
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 8,
		right: 8,
		zIndex: 10,
	},
});
