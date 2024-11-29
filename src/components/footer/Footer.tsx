import {Image, View} from 'react-native';
import {styles} from './Footer.styled';

export const Footer = () => (
  <View style={styles.footer}>
    <Image
      source={require('../../../assets/images/footer.png')}
      style={styles.footerImage}
    />
  </View>
);
