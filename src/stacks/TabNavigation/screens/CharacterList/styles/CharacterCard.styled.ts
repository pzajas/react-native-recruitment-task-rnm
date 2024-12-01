import {StyleSheet} from 'react-native';
import {theme} from '../../../../../styles/theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: theme.colors.green.dark,
    backgroundColor: theme.colors.grey.light,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 12,
  },
  detailContainer: {
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: theme.colors.green.medium,
    fontFamily: theme.fonts.mono,
  },
  value: {
    fontSize: 16,
    color: theme.colors.green.dark,
    fontFamily: theme.fonts.medium,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 24,
  },
});
