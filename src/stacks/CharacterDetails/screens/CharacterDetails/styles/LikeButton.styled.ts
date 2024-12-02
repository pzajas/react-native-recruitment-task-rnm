import {StyleSheet} from 'react-native';
import {scale} from '../../../../../config/scale';
import {theme} from '../../../../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale * 100,
    gap: scale * 8,
    width: scale * 310,
    height: scale * 34,
    backgroundColor: theme.colors.green.light,
  },
  buttonIcon: {
    marginRight: scale * 8,
  },
  buttonText: {
    fontSize: scale * 16,
    color: theme.colors.white,
  },
});
