import {TextInput, TouchableOpacity, View} from 'react-native';
import {CloseIcon} from '../../../../../../../assets/icons/CloseIcon';
import {SearchIcon} from '../../../../../../../assets/icons/SearchIcon';
import {styles} from '../../styles/SearchBar.styled';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const handleClearSearch = () => setSearchQuery('');

  return (
    <View style={styles.searchContainer}>
      <SearchIcon style={styles.searchIcon} />
      <TextInput
        placeholder="Search the characters..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.textInput}
      />
      {searchQuery ? (
        <TouchableOpacity
          onPress={handleClearSearch}
          style={styles.clearButton}>
          <CloseIcon />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
