import {Text, View} from 'react-native';
import {styles} from './CardInfo.styled';

export const CharacterDetailsCardInfo = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <View style={styles.card}>
    <Text style={styles.cardLabel}>{label}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);
