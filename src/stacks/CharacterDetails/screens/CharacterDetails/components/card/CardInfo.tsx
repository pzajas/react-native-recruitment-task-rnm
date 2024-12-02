import {Text, View} from 'react-native';
import {styles} from '../../styles/CardInfo.styled';

export const CardInfo = ({label, value}: {label: string; value: string}) => (
  <View style={styles.card}>
    <Text style={styles.cardLabel}>{label}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);
