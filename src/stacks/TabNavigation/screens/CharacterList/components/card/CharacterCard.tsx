import {useNavigation} from '@react-navigation/native';
import {useSetAtom} from 'jotai';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {favoritesAtom} from '../../../../../../services/state/state';
import {Character} from '../../../../../../typescript/characterTypes';
import {truncateLongString} from '../../../../../../utils/truncateLongString';
import {MainStackNavigationProp} from '../../../../../Main/Main.routes';
import {styles} from '../../styles/CharacterCard.styled';
interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({character}: CharacterCardProps) => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const addToFavorites = useSetAtom(favoritesAtom);

  const details = [
    {label: 'NAME', value: character.name},
    {label: 'STATUS', value: character.status},
    {label: 'SPECIES', value: character.species},
  ];

  const handlePress = () => {
    navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: {
        character,
      },
    });
  };

  const handleAddToFavorites = () => {
    addToFavorites(prev => [...prev, character]);
  };

  return (
    <Pressable onPress={handlePress}>
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
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddToFavorites}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};
