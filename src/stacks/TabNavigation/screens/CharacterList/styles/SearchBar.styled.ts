import {StyleSheet} from 'react-native';
import {scale} from '../../../../../config/scale';
import {theme} from '../../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 12,
    borderColor: theme.colors.green.dark,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
  textInput: {
    width: '100%',
    fontSize: scale * 16,
    marginLeft: scale * 28,
    color: theme.colors.green.medium,
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    padding: 10,
    paddingBottom: 7,
  },
});
