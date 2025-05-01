import type {IconProps} from '@/types/icons';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type StarIconProps = IconProps & {
	variant: 'outlined' | 'contained';
};
function Star({
	size = 16,
	color = '#F89F34',
	variant = 'outlined',
	...props
}: StarIconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.192 2.14c.299-.718 1.317-.718 1.616 0l1.388 3.337 3.603.29c.776.062 1.09 1.03.499 1.536l-2.745 2.352.838 3.515c.181.757-.642 1.355-1.306.95L8 12.236 4.915 14.12c-.664.405-1.487-.193-1.306-.95l.838-3.515-2.745-2.352c-.591-.506-.277-1.474.5-1.536l3.602-.29L7.192 2.14z"
				fill={color}
			/>
		</Svg>
	);
}

export default Star;
