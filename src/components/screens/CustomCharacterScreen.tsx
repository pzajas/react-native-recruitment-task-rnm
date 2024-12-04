import {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {buttonConstants} from '../../constants/commonContsnats';
import {useCharacterFilter} from '../../hooks/useFilters';
import {useSearch} from '../../hooks/useSearchHook';
import {styles} from '../../stacks/TabNavigation/screens/FavoriteCharacters/FavoriteCharacters.styled';
import {CustomCharacterListScreenProps} from '../../typescript/characterTypes';
import {PrimaryButton} from '../buttons/PrimaryButton';
import {CharacterCard} from '../cards/CharacterListCard';
import {NoResultsMessage} from '../errors/NoresultsMessage';
import {LoadingIndicator} from '../indicators/LoadingIndicator';
import {FilterModal} from '../modal/FilterModal';
import {SearchBar} from '../searchbar/SearchBar';

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

      <PrimaryButton
        filled={true}
        onPress={() => setIsModalVisible(true)}
        width="medium">
        <Text>{buttonConstants.FILTER}</Text>
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
