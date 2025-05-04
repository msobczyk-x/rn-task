import {calculateLetterSpacing, calculateLineHeight} from '@/utils/styles';
import type {TextStyle} from 'react-native';

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
		fontFamily: 'DMMono-Medium',
		fontSize: 12,
		lineHeight: calculateLineHeight(12, 0),
		fontWeight: 500,
		textTransform: 'uppercase',
		letterSpacing: calculateLetterSpacing(12, 8),
	},
	labelMedium: {
		fontFamily: 'DMMono-Medium',
		fontSize: 14,
		lineHeight: calculateLineHeight(14, 0),
		fontWeight: 500,
		textTransform: 'uppercase',
		letterSpacing: calculateLetterSpacing(14, 0),
	},
	buttonText: {
		fontFamily: 'DMMono-Regular',
		fontSize: 14,
		lineHeight: calculateLineHeight(14, 0),

		fontWeight: 400,
		textTransform: 'uppercase',
	},
	bodyText: {
		fontFamily: 'Inter-Regular',
		fontSize: 16,
		lineHeight: calculateLineHeight(16, 0),
		fontWeight: 400,
		letterSpacing: calculateLetterSpacing(16, -2),
	},
	bodyTextSmall: {
		fontFamily: 'Inter-Regular',
		fontSize: 12,
		lineHeight: calculateLineHeight(12, 0),
		fontWeight: 400,
		letterSpacing: calculateLetterSpacing(12, -2),
	},
	heading: {
		fontFamily: 'Inter-Medium',
		fontWeight: 500,
		fontSize: 36,
		lineHeight: calculateLineHeight(36, 0),
		letterSpacing: calculateLetterSpacing(36, -6),
	},
};

const shadows = {
	cardShadow: {
		boxShadow: [
			{
				color: colors.primary,
				offsetX: 4,
				offsetY: 4,
				blurRadius: 0,
				spreadDistance: 0,
			},
		],
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
