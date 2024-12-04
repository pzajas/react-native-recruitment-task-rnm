import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: theme.colors.green.dark,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  headerImage: {
    width: '100%',
  },
});
