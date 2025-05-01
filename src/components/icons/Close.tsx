import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from '@/types/icons';
function Close({size = 20, color = '#162C1B', ...props}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path d="M5 5l10 10M5 15L15 5" stroke="#162C1B" strokeWidth={1.5} />
    </Svg>
  );
}

export default Close;
