import {useMemo} from 'react';
import type {TouchableOpacityProps} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Typography} from '../Typography';
import {styles} from './Button.styled';

type ButtonVariant = 'contained' | 'outlined';

type ButtonProps = TouchableOpacityProps & {
	text: string;
	variant?: ButtonVariant;
	pressed?: boolean;
	icon?: React.ReactNode;
};

const Button = ({
	text,
	icon,
	variant = 'contained',
	pressed = false,
	style,
	...props
}: ButtonProps) => {
	const containerStyle = useMemo(() => {
		const styleArray = [
			styles.base,
			variant === 'contained' ? styles.contained : styles.outlined,
			pressed && variant === 'contained' ? styles.containedPressed : undefined,
			pressed && variant !== 'contained' ? styles.outlinedPressed : undefined,
			icon ? styles.withIcon : undefined,
		];

		return styleArray.filter(Boolean);
	}, [variant, pressed, icon]);

	const textStyle = useMemo(() => {
		return variant === 'contained' ? styles.textContained : styles.textOutlined;
	}, [variant]);

	return (
		<TouchableOpacity style={[containerStyle, style]} {...props}>
			{icon && icon}
			<Typography variant="buttonText" style={textStyle}>
				{text}
			</Typography>
		</TouchableOpacity>
	);
};

export default Button;
