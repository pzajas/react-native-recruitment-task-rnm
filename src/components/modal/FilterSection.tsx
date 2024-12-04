import {Text, View} from 'react-native';
import {FilterSectionProps} from '../../typescript/filterTypes';
import {styles} from './FilterModal.styled';
import {FilterOption} from './FilterOption';

export const FilterSection = ({
  title,
  options,
  selectedOptions,
  toggleFilter,
}: FilterSectionProps) => {
  return (
    <View style={styles.filterSection}>
      <Text style={styles.filterLabel}>{title.toUpperCase()}</Text>
      {options.map(option => (
        <FilterOption
          key={option}
          label={option}
          selected={selectedOptions[option]}
          onPress={() => toggleFilter(title, option)}
        />
      ))}
    </View>
  );
};
