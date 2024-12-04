import {StyleSheet} from 'react-native';
import {theme} from '../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: theme.colors.white,
  },
  flatlist: {
    backgroundColor: '#ffffff',
    marginTop: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  emptyText: {
    fontSize: 18,
    color: '#757575',
    fontWeight: 'bold',
  },
});
