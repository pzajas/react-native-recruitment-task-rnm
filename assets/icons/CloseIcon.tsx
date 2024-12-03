import Svg, {Path, SvgProps} from 'react-native-svg';
import {scale} from '../../src/config/scale';
import {theme} from '../../src/styles/theme';

export const CloseIcon = (props: SvgProps) => (
  <Svg width={scale * 24} height={scale * 24} fill="none" {...props}>
    <Path
      stroke={theme.colors.green.dark}
      strokeWidth={1.5}
      d="m5 5 10 10M5 15 15 5"
    />
  </Svg>
);
