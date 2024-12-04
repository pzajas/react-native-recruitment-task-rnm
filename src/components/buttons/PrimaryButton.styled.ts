import {StyleSheet} from 'react-native';
import {scale} from '../../config/scale';
import {theme} from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: scale * 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  small: {
    width: scale * 82,
    paddingVertical: scale * 8,
    borderColor: theme.colors.green.dark,
  },
  medium: {
    width: scale * 113,
    paddingVertical: scale * 8,
    borderColor: theme.colors.green.dark,
  },
  big: {
    width: '100%',
    borderColor: theme.colors.green.dark,
  },
  filled: {
    backgroundColor: theme.colors.green.dark,
    borderColor: theme.colors.green.dark,
  },
  outlined: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.green.dark,
  },
  filledText: {
    color: theme.colors.white,
  },
  outlinedText: {
    color: theme.colors.green.dark,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: scale * 8,
  },
  text: {
    fontSize: scale * 16,
    fontFamily: theme.fonts.monoRegular,
  },
});
