import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../styles/theme';

export const NoResultsMessage = () => (
  <View style={styles.noResultsContainer}>
    <Text style={styles.noResultsText}>
      No characters found with the applied filters.
    </Text>
  </View>
);

const styles = StyleSheet.create({
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
