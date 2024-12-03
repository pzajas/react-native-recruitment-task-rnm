import {Text} from 'react-native';
import {characterListConstants} from '../../constants/commonContsnats';
import {styles} from './HeaderText.styled';

export const HeaderText = () => (
  <Text style={styles.headerText}>{characterListConstants.CHARACTERS}</Text>
);
