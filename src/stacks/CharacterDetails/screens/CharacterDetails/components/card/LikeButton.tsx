import {Text} from 'react-native';
import {StarIcon} from '../../../../../../../assets/icons/StarIcon';
import {PrimaryButton} from '../../../../../../components/buttons/PrimaryButton';
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

  const iconFillColor = isFavorite(character)
    ? theme.colors.gold
    : theme.colors.white;

  return (
    <PrimaryButton
      filled={isFavorite(character)}
      onPress={() => toggleFavorite(character)}
      icon={<StarIcon fill={iconFillColor} />}
      style={styles.button}
      width="big">
      <Text style={styles.buttonText}>
        {isFavorite(character)
          ? characterDetailsConstants.REMOVE_FROM_LIKED
          : characterDetailsConstants.ADD_TO_LIKED}
      </Text>
    </PrimaryButton>
  );
}
