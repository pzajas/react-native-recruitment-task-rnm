import Svg, {Rect, SvgProps} from 'react-native-svg';
import {theme} from '../../src/theme/theme';

export const BlankCheck = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect
      width={15}
      height={15}
      x={0.5}
      y={1}
      fill={theme.colors.white}
      stroke={theme.colors.grey.medium}
      rx={3.5}
    />
  </Svg>
);
