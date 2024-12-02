import {ImageStyle, View} from 'react-native';
import {PersonIcon} from '../../../../assets/icons/PersonIcon';
import {StarIcon} from '../../../../assets/icons/StarIcon';
import {SCREENS} from '../../../constants/screenNames';
import {styles} from './TabIcon.styled';
interface TabIconProps {
  name: string;
  focused: boolean;
}
export const TabIcon = ({name}: TabIconProps) => {
  const IconComponent = name === SCREENS.ALL_CHARACTERS ? PersonIcon : StarIcon;

  const iconStyle: ImageStyle = {
    ...styles.icon,
  };

  return (
    <View style={styles.wrapper}>
      <IconComponent style={iconStyle} />
    </View>
  );
};
