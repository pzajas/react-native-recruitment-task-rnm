import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  noResultsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  noResultsText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
    color: theme.colors.grey.medium,
  },
});
