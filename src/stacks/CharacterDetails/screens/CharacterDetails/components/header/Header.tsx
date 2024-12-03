import {Image, View} from 'react-native';
import {styles} from '../../styles/CharacterHeader.styled';

export const Header = () => {
  const headerImage = require('../../../../../../../assets/images/nav.png');

  return (
    <View>
      <Image source={headerImage} style={styles.headerImage} />
    </View>
  );
};
