import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {PrimaryButton} from '../../../../components/buttons/PrimaryButton';
import {NoResultsMessage} from '../../../../components/errors/NoresultsMessage';
import {LoadingIndicator} from '../../../../components/indicators/LoadingIndicator';
import {useCharacterFilter} from '../../../../hooks/useFilters';
import {useCharacters} from '../../../../services/hooks/useCharacters';
import {useSearchCharacters} from '../../../../services/hooks/useSearchCharacters';
import {CharacterCard} from './components/card/CharacterCard';
import {FilterModal} from './components/modal/FilterModal';
import {SearchBar} from './components/searchbar/SearchBar';
import {styles} from './styles/CharacterList.styled';

function CharacterList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const {
    filteredCharacters,
    toggleFilter,
    resetFilters,
    statusFilter,
    speciesFilter,
    applyFilters,
  } = useCharacterFilter(characters);

  const dataToDisplay = searchQuery
    ? searchData?.results
    : filteredCharacters.length > 0
    ? filteredCharacters
    : characters;

  const hasNoResults =
    searchQuery && (!dataToDisplay || dataToDisplay.length === 0);

  const handleEndReached = () => {
    if (!searchQuery && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <PrimaryButton filled={true} onPress={() => setIsModalVisible(true)}>
        <Text>FILTER</Text>
      </PrimaryButton>

      {isSearching && <LoadingIndicator />}

      {hasNoResults ? (
        <NoResultsMessage />
      ) : (
        <FlatList
          data={dataToDisplay}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CharacterCard character={item} />}
          showsVerticalScrollIndicator={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          style={styles.flatlist}
        />
      )}

      {!searchQuery && isFetchingNextPage && <LoadingIndicator />}

      <FilterModal
        isModalVisible={isModalVisible}
        toggleFilter={toggleFilter}
        resetFilters={resetFilters}
        statusFilter={statusFilter}
        speciesFilter={speciesFilter}
        setIsModalVisible={setIsModalVisible}
        applyFilters={applyFilters}
      />
    </View>
  );
}

export default CharacterList;
