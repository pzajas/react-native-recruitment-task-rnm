import {View} from 'react-native';
import {Character} from '../../../../../../typescript/characterTypes';
import {getCharacterDetails} from '../../../../../../utils/getCharacterDetails';
import {styles} from '../../styles/CharacterDetailsCard.styled';
import {CardInfo} from './CardInfo';
import {CharacterImage} from './CharacterImage';
import {CharacterName} from './CharacterName';
import {AddToLikedButton} from './LikeButton';

export function CharacterDetailsCard({character}: {character: Character}) {
  const {name, image} = character;
  const {statusAndOriginRow, speciesAndGenderRow} =
    getCharacterDetails(character);

  return (
    <View style={styles.hugeView}>
      <View style={styles.innerView}>
        <CharacterImage image={image} />
        <CharacterName name={name} />
        <View style={styles.detailsContainer}>
          <View style={styles.contentRow}>
            {statusAndOriginRow.map((item, index) => (
              <CardInfo key={index} label={item.label} value={item.value} />
            ))}
          </View>
          <View style={styles.contentRow}>
            {speciesAndGenderRow.map((item, index) => (
              <CardInfo key={index} label={item.label} value={item.value} />
            ))}
          </View>
        </View>

        <AddToLikedButton />
      </View>
    </View>
  );
}
