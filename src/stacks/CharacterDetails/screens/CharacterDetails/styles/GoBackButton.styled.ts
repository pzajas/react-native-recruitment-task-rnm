import {StyleSheet} from 'react-native';
import {scale} from '../../../../../config/scale';
import {theme} from '../../../../../styles/theme';

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
