import {Image} from 'react-native';
import {Character} from '../../../typescript/characterTypes';
import {styles} from './CharacterImage.styled';

export function CharacterDetailsCardImage({image}: Pick<Character, 'image'>) {
  return <Image source={{uri: image}} style={styles.characterImage} />;
}
