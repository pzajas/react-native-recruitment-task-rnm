import {Pressable, Text} from 'react-native';
import {StarIcon} from '../../../../../../../assets/icons/StarIcon';
import {characterDetailsConstants} from '../../../../../../constants/commonContsnats';
import {styles} from '../../styles/LikeButton.styled';

export function AddToLikedButton() {
  return (
    <Pressable style={styles.button}>
      <StarIcon style={styles.buttonIcon} />
      <Text style={styles.buttonText}>
        {characterDetailsConstants.ADD_TO_LIKED}
      </Text>
    </Pressable>
  );
}
