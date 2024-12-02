import {StyleSheet} from 'react-native';
import {scale} from '../../../../../config/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  remainingView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
  },
  coverImage: {
    width: '100%',
    height: scale * 100,
    resizeMode: 'cover',
  },
});
