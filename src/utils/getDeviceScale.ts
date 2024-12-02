import {Dimensions} from 'react-native';

const BASE_WIDTH = 390;

export const getDeviceScale = () => {
  const {width} = Dimensions.get('window');
  return width / BASE_WIDTH;
};
