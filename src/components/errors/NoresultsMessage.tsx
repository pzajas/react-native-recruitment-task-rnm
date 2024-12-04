import {Text, View} from 'react-native';
import {styles} from './NoResultsMessage.styled';

export const NoResultsMessage = () => (
  <View style={styles.noResultsContainer}>
    <Text style={styles.noResultsText}>
      No characters found with the applied filters.
    </Text>
  </View>
);
