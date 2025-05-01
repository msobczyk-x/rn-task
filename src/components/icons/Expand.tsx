import type {IconProps} from '@/types/icons';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type ExpandIconProps = IconProps & {
	isExpanded?: boolean;
};

function Expand({
	size = 14,
	color = '#fff',
	isExpanded = false,
	...props
}: ExpandIconProps) {
	const rotation = isExpanded ? '180deg' : '0deg';

	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 -960 960 960"
			fill={color}
			style={{transform: [{rotate: rotation}]}}
			{...props}>
			<Path d="M480-344L240-584l56-56 184 184 184-184 56 56-240 240z" />
		</Svg>
	);
}

export default Expand;
