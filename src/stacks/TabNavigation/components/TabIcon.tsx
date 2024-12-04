import {ImageStyle, View} from 'react-native';
import {PersonIcon} from '../../../../assets/icons/PersonIcon';
import {StarIcon} from '../../../../assets/icons/StarIcon';
import {buttonConstants} from '../../../constants/commonContsnats';
import {styles} from './TabIcon.styled';
interface TabIconProps {
  name: string;
  focused: boolean;
}
export const TabIcon = ({name}: TabIconProps) => {
  const IconComponent =
    name === buttonConstants.ALL_CHARACTERS ? PersonIcon : StarIcon;

  const iconStyle: ImageStyle = {
    ...styles.icon,
  };

  return (
    <View style={styles.wrapper}>
      <IconComponent style={iconStyle} />
    </View>
  );
};
