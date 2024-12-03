import Svg, {Path, SvgProps} from 'react-native-svg';
import {scale} from '../../src/config/scale';
import {theme} from '../../src/styles/theme';

export const SearchIcon = (props: SvgProps) => (
  <Svg width={scale * 20} height={scale * 20} fill="none" {...props}>
    <Path
      stroke={theme.colors.green.dark}
      strokeWidth={1.5}
      d="m13 13 4 4m-2-8A6 6 0 1 1 3 9a6 6 0 0 1 12 0Z"
    />
  </Svg>
);
