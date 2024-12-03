import Svg, {Path, SvgProps} from 'react-native-svg';
import {theme} from '../../src/styles/theme';

export const CheckIcon = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Path fill={theme.colors.white} fillRule="evenodd" d="M0 0h48v1H0z" />
  </Svg>
);
