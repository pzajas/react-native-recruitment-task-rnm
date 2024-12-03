import {useState} from 'react';
import {FlatList, View} from 'react-native';
import {LoadingIndicator} from '../../../../components/indicators/LoadingIndicator';
import {useCharacters} from '../../../../services/hooks/useCharacters';
import {useSearchCharacters} from '../../../../services/hooks/useSearchCharacters';
import {CharacterCard} from './components/card/CharacterCard';
import {SearchBar} from './components/searchbar/SearchBar';
import {styles} from './styles/CharacterList.styled';

function CharacterList() {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: paginatedData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacters();

  const {data: searchData, isFetching: isSearching} =
    useSearchCharacters(searchQuery);

  const characters = searchQuery
    ? searchData?.results
    : paginatedData?.pages?.flatMap(page => page.results);

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isSearching && <LoadingIndicator />}
      <FlatList
        data={characters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CharacterCard character={item} />}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (!searchQuery && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
      />
      {!searchQuery && isFetchingNextPage && <LoadingIndicator />}
    </View>
  );
}

export default CharacterList;
