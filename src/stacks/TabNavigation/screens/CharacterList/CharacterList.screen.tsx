import {CustomCharacterListScreen} from '../../../../components/screens/CustomCharacterScreen';
import {useCharacters} from '../../../../services/hooks/useCharacters';

function CharacterList() {
  const {
    data: paginatedData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacters();

  return (
    <CustomCharacterListScreen
      data={paginatedData?.pages?.flatMap(page => page.results) || []}
      isFavorites={false}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      isSearching={false}
    />
  );
}

export default CharacterList;
