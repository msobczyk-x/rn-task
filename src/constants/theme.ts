import {calculateLetterSpacing, calculateLineHeight} from '@/utils/styles';
import type {TextStyle} from 'react-native';
import {Platform} from 'react-native';

export type FontVariant =
	| 'labelSmall'
	| 'labelMedium'
	| 'buttonText'
	| 'bodyText'
	| 'bodyTextSmall'
	| 'heading';

export type ColorVariant =
	| 'primary'
	| 'white'
	| 'darkGreen'
	| 'mediumGreen'
	| 'lightGreen'
	| 'greyishGreen'
	| 'accent'
	| 'background';

export const colors: Record<ColorVariant, string> = {
	primary: '#224229',
	white: '#ffffff',
	darkGreen: '#162c1b',
	mediumGreen: '#59695c',
	lightGreen: '#f4f6f5',
	greyishGreen: '#dae4dc',
	accent: '#f89f34',
	background: '#f4f6f5',
};

const fonts: Record<FontVariant, TextStyle> = {
	labelSmall: {
		fontFamily: 'DMMono',
		fontSize: 12,
		lineHeight: calculateLineHeight(12, 100),
		fontWeight: 500,
		textTransform: 'uppercase',
		letterSpacing: calculateLetterSpacing(12, 8),
	},
	labelMedium: {
		fontFamily: 'DMMono',
		fontSize: 14,
		lineHeight: calculateLineHeight(14, 100),
		fontWeight: 500,
		textTransform: 'uppercase',
		letterSpacing: calculateLetterSpacing(14, 0),
	},
	buttonText: {
		fontFamily: 'DMMono',
		fontSize: 14,
		lineHeight: calculateLineHeight(14, 100),
		fontWeight: 400,
		textTransform: 'uppercase',
		letterSpacing: calculateLetterSpacing(14, 0),
	},
	bodyText: {
		fontFamily: 'Inter',
		fontSize: 16,
		lineHeight: calculateLineHeight(16, 100),
		fontWeight: 400,
		letterSpacing: calculateLetterSpacing(16, -2),
	},
	bodyTextSmall: {
		fontFamily: 'Inter',
		fontSize: 12,
		lineHeight: calculateLineHeight(12, 100),
		fontWeight: 400,
		letterSpacing: calculateLetterSpacing(12, -2),
	},
	heading: {
		fontFamily: 'Inter',
		fontWeight: 500,
		fontSize: 36,
		lineHeight: calculateLineHeight(36, 100),
		letterSpacing: calculateLetterSpacing(36, -6),
	},
};

const shadows = {
	cardShadow: {
		...Platform.select({
			ios: {
				shadowColor: '#224229',
				shadowOffset: {width: 4, height: 4},
				shadowOpacity: 1,
				shadowRadius: 0,
			},
			android: {
				elevation: 6,
				shadowColor: '#224229',
				outlineColor: '#224229',
			},
		}),
	},
};

export const theme = {
	colors: {
		...colors,
	},
	fonts: {
		...fonts,
	},
	shadows: {
		...shadows,
	},
};

export const AppTheme = typeof theme;
