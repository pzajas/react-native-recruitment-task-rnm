import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {styles} from './CharacterList.styled';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Implement CharactersListScreen</Text>
      <Button
        title="Navigate to Details screen"
        onPress={(): void => {
          navigate('CharacterDetailsStack', {
            screen: 'CharacterDetailsScreen',
          });
        }}
      />
    </View>
  );
};

export default CharacterListScreen;
