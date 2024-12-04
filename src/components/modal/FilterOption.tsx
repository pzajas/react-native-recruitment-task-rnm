import {Pressable, Text} from 'react-native';
import {BlankCheck} from '../../../assets/icons/BlankCheck';
import {CheckedCheck} from '../../../assets/icons/CheckedCheck';
import {FilterOptionProps} from '../../typescript/filterTypes';
import {styles} from './FilterModal.styled';

export const FilterOption = ({label, selected, onPress}: FilterOptionProps) => {
  return (
    <Pressable style={styles.filterOption} onPress={onPress}>
      {selected ? <CheckedCheck /> : <BlankCheck />}
      <Text style={styles.filterOptionText}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </Text>
    </Pressable>
  );
};
