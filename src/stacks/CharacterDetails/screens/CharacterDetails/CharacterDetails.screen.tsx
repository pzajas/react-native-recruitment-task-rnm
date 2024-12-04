import {View} from 'react-native';
import {CharacterDetailsCard} from '../../../../components/cards/characterDetailsCard/CharacterDetailsCard';
import {useNavigationBarColor} from '../../../../hooks/useNavigationBarColor';
import {CharacterDetailsScreenProps} from '../../../../typescript/characterTypes';

import {GoBackButton} from '../../../../components/buttons/GoBackButton';
import {styles} from '../../../../components/cards/characterDetailsCard/CharacterDetailsScreen.styled';
import {Footer} from '../../../../components/footer/Footer';
import {Header} from '../../../../components/header/Header';

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
