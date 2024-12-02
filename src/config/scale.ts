import {Dimensions} from 'react-native';
import {BASE_DEVICE_WIDTH} from '../constants/commonContsnats';

const {width} = Dimensions.get('window');

export const scale = width / BASE_DEVICE_WIDTH;
