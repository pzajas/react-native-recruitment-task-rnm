import {StyleSheet} from 'react-native';
import {scale} from '../../../config/scale';

export const styles = StyleSheet.create({
  nameContainer: {
    width: '100%',
  },
  nameLabel: {
    fontFamily: 'DM Mono',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: scale * 12,
    lineHeight: scale * 15.62,
    letterSpacing: scale * 0.08,
  },
  nameText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: scale * 36,
    lineHeight: scale * 43.57,
    letterSpacing: scale * -0.06,
  },
});
