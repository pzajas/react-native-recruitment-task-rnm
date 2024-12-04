import {Pressable, Text} from 'react-native';
import {StarIcon} from '../../../../../../../assets/icons/StarIcon';
import {characterDetailsConstants} from '../../../../../../constants/commonContsnats';
import {useFavorites} from '../../../../../../hooks/useFavorites';
import {theme} from '../../../../../../styles/theme';
import {Character} from '../../../../../../typescript/characterTypes';
import {styles} from '../../styles/LikeButton.styled';
interface AddToLikedButtonProps {
  character: Character;
}

export function AddToLikedButton({character}: AddToLikedButtonProps) {
  const {isFavorite, toggleFavorite} = useFavorites();

  return (
    <Pressable style={styles.button} onPress={() => toggleFavorite(character)}>
      <StarIcon
        fill={isFavorite(character) ? theme.colors.gold : theme.colors.white}
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>
        {isFavorite(character)
          ? characterDetailsConstants.REMOVE_FROM_LIKED
          : characterDetailsConstants.ADD_TO_LIKED}
      </Text>
    </Pressable>
  );
}
