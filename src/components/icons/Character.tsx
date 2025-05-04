import type {IconProps} from '@/types/icons';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Character({size = 16, color = '#fff', ...props}: IconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.5 4a3 3 0 116 0 3 3 0 01-6 0zM3 13.403a5.5 5.5 0 0110.999 0 .5.5 0 01-.292.464A12.456 12.456 0 018.5 15c-1.857 0-3.622-.405-5.208-1.133a.5.5 0 01-.29-.464z"
				fill={color}
			/>
		</Svg>
	);
}

export default Character;
