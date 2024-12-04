import {StyleSheet} from 'react-native';
import {scale} from '../../../../../config/scale';
import {theme} from '../../../../../theme/theme';

export const styles = StyleSheet.create({
  card: {
    width: scale * 147,
    height: scale * 50,
    padding: scale * 8,
    gap: scale * 4,
    borderRadius: scale * 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.grey.light,
  },
  cardLabel: {
    fontFamily: 'DM Mono',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: scale * 12,
    lineHeight: scale * 15.62,
    letterSpacing: scale * 0.08,
  },
  cardValue: {
    fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'left',
    fontSize: scale * 16,
    lineHeight: scale * 19.36,
    letterSpacing: scale * -0.02,
  },
});
