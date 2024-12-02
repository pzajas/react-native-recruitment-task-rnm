import {StyleSheet} from 'react-native';
import {scale} from '../../../../../config/scale';
import {theme} from '../../../../../styles/theme';

export const styles = StyleSheet.create({
  hugeView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    zIndex: 0,
    paddingHorizontal: scale * 16,
  },
  innerView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: scale * 24,
    borderWidth: 1,
    gap: scale * 16,
    padding: scale * 24,
    borderColor: theme.colors.black,
    backgroundColor: theme.colors.white,
  },

  detailsContainer: {
    width: '100%',
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: scale * 8,
  },
});
