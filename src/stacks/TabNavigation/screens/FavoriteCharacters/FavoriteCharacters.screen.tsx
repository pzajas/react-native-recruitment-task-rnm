import {useAtom} from 'jotai';
import {FlatList, Text, View} from 'react-native';
import {useSearch} from '../../../../hooks/useSearchHook';
import {favoritesAtom} from '../../../../services/state/state';
import {Character} from '../../../../typescript/characterTypes';
import {CharacterCard} from '../CharacterList/components/card/CharacterCard';
import {SearchBar} from '../CharacterList/components/searchbar/SearchBar';
import {styles} from './FavoriteCharacters.styled';

const FavoriteCharactersScreen = () => {
  const [favorites] = useAtom(favoritesAtom);

  const {searchQuery, setSearchQuery, clearSearch, filteredData} =
    useSearch<Character>(favorites, character => character.name);

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorites yet!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clearSearch={clearSearch}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item?.id?.toString()}
        renderItem={({item}) => <CharacterCard character={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
      />
    </View>
  );
};

export default FavoriteCharactersScreen;
