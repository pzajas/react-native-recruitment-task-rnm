import {View} from 'react-native';
import {useNavigationBarColor} from '../../../../hooks/useNavigationBarColor';
import {CharacterDetailsScreenProps} from '../../../../typescript/characterTypes';
import {CharacterDetailsCard} from './components/card/CharacterDetailsCard';
import {Footer} from './components/footer/Footer';
import {GoBackButton} from './components/header/GoBackButton';
import {Header} from './components/header/Header';
import {styles} from './styles/CharacterDetailsScreen.styled';

export const CharacterDetailsScreen = ({
  route,
}: CharacterDetailsScreenProps) => {
  useNavigationBarColor('rgba(0,0,0,0)');

  const character = route?.params?.character;

  return (
    <View style={styles.container}>
      <Header />
      <GoBackButton />
      <CharacterDetailsCard character={character} />
      <Footer />
    </View>
  );
};
