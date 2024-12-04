import {StyleSheet} from 'react-native';
import {scale} from '../../config/scale';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  headerText: {
    lineHeight: scale * 43.57,
    fontSize: scale * 36,
    textAlign: 'left',
    paddingLeft: 16,
    paddingTop: 16,
    backgroundColor: theme.colors.white,
    color: theme.colors.green.dark,
  },
});
