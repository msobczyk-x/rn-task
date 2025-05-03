import type {FontVariant} from '@/constants/theme';
import type {TextProps} from 'react-native';

import {Text} from 'react-native';
import {styles} from './Typography.styled';

type TypographyProps = TextProps & {
	children: React.ReactNode;
	variant?: FontVariant;
};

const Typography = ({
	children,
	variant = 'bodyText',
	style,
	...props
}: TypographyProps) => {
	return (
		<Text style={[styles[variant], style]} {...props}>
			{children}
		</Text>
	);
};

export default Typography;
