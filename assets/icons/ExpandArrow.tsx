import Svg, {Path, SvgProps} from 'react-native-svg';
import {scale} from '../../src/config/scale';
import {theme} from '../../src/styles/theme';

export const ExpandArrow = (props: SvgProps) => (
  <Svg width={scale * 24} height={scale * 24} fill="none" {...props}>
    <Path
      fill={theme.colors.white}
      d="m6.68.004.82.82-3.5 3.5L.5.824l.82-.82L4 2.684 6.68.004Z"
    />
  </Svg>
);
