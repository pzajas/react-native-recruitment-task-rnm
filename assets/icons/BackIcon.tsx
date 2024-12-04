import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';
import {theme} from '../../src/theme/theme';

export const BackIcon = (props: SvgProps) => (
  <Svg width={12} height={12} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={theme.colors.green.light}
        d="m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414-4.95 4.95Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={theme.colors.white} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
