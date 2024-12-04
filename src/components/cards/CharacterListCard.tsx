import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, Text, View} from 'react-native';
import {StarIcon} from '../../../assets/icons/StarIcon';
import {buttonConstants} from '../../constants/commonContsnats';
import {useFavorites} from '../../hooks/useFavorites';
import {MainStackNavigationProp} from '../../stacks/Main/Main.routes';
import {theme} from '../../theme/theme';
import {Character} from '../../typescript/characterTypes';
import {truncateLongString} from '../../utils/truncateLongString';
import {PrimaryButton} from '../buttons/PrimaryButton';
import {styles} from './CharacterListCard.styled';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({character}: CharacterCardProps) => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const {isFavorite, toggleFavorite} = useFavorites();

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
            <PrimaryButton
              filled={false}
              onPress={() => toggleFavorite(character)}
              width="small"
              icon={
                <StarIcon
                  fill={
                    isFavorite(character)
                      ? theme.colors.gold
                      : theme.colors.white
                  }
                  stroke={
                    isFavorite(character) ? 'none' : theme.colors.green.dark
                  }
                />
              }>
              <Text>{buttonConstants.LIKE}</Text>
            </PrimaryButton>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
