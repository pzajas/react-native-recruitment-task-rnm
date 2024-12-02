import {Image, View} from 'react-native';
import {styles} from '../header/Header.styled';

export const Header = () => (
  <View style={styles.header}>
    <Image
      source={require('../../../assets/images/nav.png')}
      style={styles.headerImage}
    />
  </View>
);
