import {Text, View} from 'react-native';
import {styles} from './CharacterDetails.styled';

const CharacterDetailsScreen = ({route}) => {
  const {characterName} = route.params;

  return (
    <View style={styles.container}>
      <Text>{characterName}</Text>
    </View>
  );
};

export default CharacterDetailsScreen;
