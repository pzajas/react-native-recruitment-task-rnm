import {StyleSheet} from 'react-native';
import {theme} from '../../../../../styles/theme';
import {getDeviceScale} from '../../../../../utils/getDeviceScale';

const scale = getDeviceScale();

export const styles = StyleSheet.create({
  goBackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 8,
  },
  goBackText: {
    fontSize: scale * 12,
    lineHeight: scale * 14.52,
    fontFamily: 'Inter-Regular',
    color: theme.colors.black,
  },
  goBackPressable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
