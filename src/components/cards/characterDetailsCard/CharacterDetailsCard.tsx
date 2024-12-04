import {View} from 'react-native';
import {Character} from '../../../typescript/characterTypes';
import {getCharacterDetails} from '../../../utils/getCharacterDetails';
import {styles} from './CharacterDetailsCard.styled';
import {CharacterDetailsCardImage} from './CharacterDetailsCardImage';
import {CharacterDetailsCardInfo} from './CharacterDetailsCardInfo';
import {CharacterDetailsCardLikeButton} from './CharacterDetailsCardLikeButton';
import {CharacterDetailsCardName} from './CharacterDetailsCardName';

export function CharacterDetailsCard({character}: {character: Character}) {
  const {name, image} = character;
  const {statusAndOriginRow, speciesAndGenderRow} =
    getCharacterDetails(character);

  return (
    <View style={styles.hugeView}>
      <View style={styles.innerView}>
        <CharacterDetailsCardImage image={image} />
        <CharacterDetailsCardName name={name} />
        <View style={styles.detailsContainer}>
          <View style={styles.contentRow}>
            {statusAndOriginRow.map((item, index) => (
              <CharacterDetailsCardInfo
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </View>
          <View style={styles.contentRow}>
            {speciesAndGenderRow.map((item, index) => (
              <CharacterDetailsCardInfo
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </View>
        </View>

        <CharacterDetailsCardLikeButton character={character} />
      </View>
    </View>
  );
}
