import type {IconProps} from '@/types/icons';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Expand({size = 14, color = '#fff', ...props}: IconProps) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 -960 960 960"
			fill={color}
			{...props}>
			<Path d="M480-344L240-584l56-56 184 184 184-184 56 56-240 240z" />
		</Svg>
	);
}

export default Expand;
