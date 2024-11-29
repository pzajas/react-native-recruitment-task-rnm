import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

export const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 140,
    zIndex: -1,
    backgroundColor: theme.colors.green.dark,
  },
  footerImage: {
    width: '100%',
    resizeMode: 'cover',
    height: 92,
  },
});
