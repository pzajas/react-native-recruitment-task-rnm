import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 140,
  },
  tabBar: {
    height: 70,
    borderWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  tabBarLabel: {
    fontSize: 14,
    marginTop: 5,
    color: theme.colors.white,
    fontFamily: theme.fonts.mono,
  },
});
