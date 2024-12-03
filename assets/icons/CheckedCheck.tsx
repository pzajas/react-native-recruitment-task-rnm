import Svg, {Path, Rect, SvgProps} from 'react-native-svg';
import {theme} from '../../src/styles/theme';

export const CheckedCheck = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect
      width={15}
      height={15}
      x={0.5}
      y={1}
      fill={theme.colors.green.dark}
      stroke={theme.colors.green.dark}
      rx={3.5}
    />
    <Path
      fill={theme.colors.white}
      fillRule="evenodd"
      d="M13.806 4.734a.8.8 0 0 1 0 1.132l-6.789 6.788a.812.812 0 0 1-.043.04.8.8 0 0 1-1.214.097L2.234 9.266a.8.8 0 0 1 1.132-1.132L6.32 11.09l6.354-6.355a.8.8 0 0 1 1.132 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
