import {Image, Text, View} from 'react-native';
import {truncateLongString} from '../../../../../utils/truncateLongString';
import {styles} from '../styles/CharacterCard.styled';

interface Character {
  name: string;
  status: string;
  species: string;
  image: string;
}

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({character}: CharacterCardProps) => {
  const details = [
    {label: 'NAME', value: character.name},
    {label: 'STATUS', value: character.status},
    {label: 'SPECIES', value: character.species},
  ];

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        {details.map((item, index) => (
          <View key={index} style={styles.detailContainer}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{truncateLongString(item.value)}</Text>
          </View>
        ))}
      </View>
      <Image source={{uri: character.image}} style={styles.image} />
    </View>
  );
};
