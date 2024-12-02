import {Text, View} from 'react-native';
import {characterDetailsConstants} from '../../../../../../constants/commonContsnats';
import {Character} from '../../../../../../typescript/characterTypes';
import {styles} from '../../styles/CharacterName.styled';

export function CharacterName({name}: Pick<Character, 'name'>) {
  return (
    <View style={styles.nameContainer}>
      <Text style={styles.nameLabel}>{characterDetailsConstants.NAME}</Text>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
}
