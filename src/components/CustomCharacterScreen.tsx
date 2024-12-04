import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useCharacterFilter} from '../hooks/useFilters';
import {useSearch} from '../hooks/useSearchHook';
import {CharacterCard} from '../stacks/TabNavigation/screens/CharacterList/components/card/CharacterCard';
import {FilterModal} from '../stacks/TabNavigation/screens/CharacterList/components/modal/FilterModal';
import {SearchBar} from '../stacks/TabNavigation/screens/CharacterList/components/searchbar/SearchBar';
import {styles} from '../stacks/TabNavigation/screens/FavoriteCharacters/FavoriteCharacters.styled';
import {Character} from '../typescript/characterTypes';
import {PrimaryButton} from './buttons/PrimaryButton';
import {NoResultsMessage} from './errors/NoresultsMessage';
import {LoadingIndicator} from './indicators/LoadingIndicator';

type CustomCharacterListScreenProps = {
  data: Character[];
  isFavorites: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isSearching: boolean;
};

export const CustomCharacterListScreen = ({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isSearching,
}: CustomCharacterListScreenProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {searchQuery, setSearchQuery, clearSearch, filteredData} = useSearch(
    data,
    character => character?.name,
  );

  const {
    filteredCharacters,
    toggleFilter,
    resetFilters,
    statusFilter,
    speciesFilter,
    applyFilters,
  } = useCharacterFilter(data);

  const characters = searchQuery
    ? filteredData
    : filteredCharacters.length > 0
    ? filteredCharacters
    : data;

  const hasNoResults = searchQuery && (!characters || characters.length === 0);

  const handleEndReached = () => {
    if (!searchQuery && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clearSearch={clearSearch}
      />

      <PrimaryButton filled={true} onPress={() => setIsModalVisible(true)}>
        <Text>FILTER</Text>
      </PrimaryButton>

      {isSearching && <LoadingIndicator />}

      {hasNoResults ? (
        <NoResultsMessage />
      ) : (
        <FlatList
          data={characters}
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
};
