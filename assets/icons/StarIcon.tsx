import Svg, {Path, SvgProps} from 'react-native-svg';
import {theme} from '../../src/styles/theme';

export const StarIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill={props.fill || theme.colors.white}
      fillRule="evenodd"
      d="M7.692 2.14c.299-.718 1.317-.718 1.616 0l1.388 3.337 3.603.29c.776.062 1.09 1.03.499 1.536l-2.745 2.352.838 3.515c.181.757-.642 1.355-1.306.95L8.5 12.236 5.415 14.12c-.664.405-1.487-.193-1.306-.95l.838-3.515-2.745-2.352c-.591-.506-.277-1.474.5-1.536l3.602-.29L7.692 2.14Z"
      clipRule="evenodd"
    />
  </Svg>
);
