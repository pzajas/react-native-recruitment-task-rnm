import {ActivityIndicator, View} from 'react-native';
import {theme} from '../../styles/theme';
import {styles} from './LoadingIndicator.styled';

export const LoadingIndicator = () => (
  <View style={styles.overlay}>
    <ActivityIndicator size="large" color={theme.colors.white} />
  </View>
);
