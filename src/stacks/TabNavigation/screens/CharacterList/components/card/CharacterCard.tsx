import {useNavigation} from '@react-navigation/native';
import {useAtom} from 'jotai';
import {Image, Pressable, Text, View} from 'react-native';
import {StarIcon} from '../../../../../../../assets/icons/StarIcon';
import {PrimaryButton} from '../../../../../../components/buttons/PrimaryButton';
import {favoritesAtom} from '../../../../../../services/state/state';
import {theme} from '../../../../../../styles/theme';
import {Character} from '../../../../../../typescript/characterTypes';
import {truncateLongString} from '../../../../../../utils/truncateLongString';
import {MainStackNavigationProp} from '../../../../../Main/Main.routes';
import {styles} from '../../styles/CharacterCard.styled';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({character}: CharacterCardProps) => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const isFavorite = favorites.some(fav => fav.id === character.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  };

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
        <View style={styles.imageContainer}>
          <Image source={{uri: character.image}} style={styles.image} />
          <View style={styles.likeButtonContainer}>
            <PrimaryButton filled={true} onPress={toggleFavorite}>
              <StarIcon fill={isFavorite ? 'gold' : theme.colors.white} />
              <Text>LIKE</Text>
            </PrimaryButton>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
