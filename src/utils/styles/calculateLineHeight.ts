import {Platform} from 'react-native';

export const calculateLineHeight = (
	fontSize: number,
	percentage = 100,
): number | undefined => {
	if (Platform.OS === 'android') {
		return undefined;
	}

	return Math.round(fontSize * (percentage / 100));
};
