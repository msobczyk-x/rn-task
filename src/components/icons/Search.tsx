import type {IconProps} from '@/types/icons';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
function Search({size = 20, color = '#162C1B', ...props}: IconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
			<Path
				d="M13 13l4 4m-2-8A6 6 0 113 9a6 6 0 0112 0z"
				stroke={color}
				strokeWidth={1.5}
			/>
		</Svg>
	);
}

export default Search;
