import {StyleSheet} from 'react-native';
import {scale} from '../../config/scale';

export const styles = StyleSheet.create({
  remainingView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
  },
  coverImage: {
    width: '100%',
    resizeMode: 'cover',
    height: scale * 100,
  },
});
