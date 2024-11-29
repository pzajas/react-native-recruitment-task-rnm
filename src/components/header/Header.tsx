import {Image, ImageSourcePropType, View} from 'react-native';
import {styles} from '../header/Header.styled';

interface HeaderProps {
  imageSource: ImageSourcePropType;
}

export const Header = ({imageSource}: HeaderProps) => (
  <View style={styles.header}>
    <Image source={imageSource} style={styles.headerImage} />
  </View>
);
