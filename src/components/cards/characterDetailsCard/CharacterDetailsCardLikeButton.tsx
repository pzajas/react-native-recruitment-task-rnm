import {Text} from 'react-native';
import {StarIcon} from '../../../../assets/icons/StarIcon';
import {buttonConstants} from '../../../constants/commonContsnats';
import {useFavorites} from '../../../hooks/useFavorites';
import {theme} from '../../../theme/theme';
import {Character} from '../../../typescript/characterTypes';
import {PrimaryButton} from '../../buttons/PrimaryButton';
import {styles} from './LikeButton.styled';

interface AddToLikedButtonProps {
  character: Character;
}

export function CharacterDetailsCardLikeButton({
  character,
}: AddToLikedButtonProps) {
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
          ? buttonConstants.REMOVE_FROM_LIKED
          : buttonConstants.ADD_TO_LIKED}
      </Text>
    </PrimaryButton>
  );
}
