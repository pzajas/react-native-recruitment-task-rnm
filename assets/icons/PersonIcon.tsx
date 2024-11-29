import Svg, {Path, SvgProps} from 'react-native-svg';

export const PersonIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#DAE4DC"
      fillRule="evenodd"
      d="M5.5 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM3 13.403a5.5 5.5 0 0 1 11 0 .5.5 0 0 1-.292.464A12.456 12.456 0 0 1 8.5 15c-1.857 0-3.622-.405-5.208-1.133a.5.5 0 0 1-.291-.464Z"
      clipRule="evenodd"
    />
  </Svg>
);
