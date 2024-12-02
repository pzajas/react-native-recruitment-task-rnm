import {Image, StyleSheet, View} from 'react-native';
import {scale} from '../../../../../../config/scale';

export const Footer = () => {
  const footerImage = require('../../../../../../../assets/images/footer.png');

  return (
    <View style={styles.remainingView}>
      <Image source={footerImage} style={styles.coverImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: scale * 100,
    resizeMode: 'cover',
  },
  remainingView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
  },
});
