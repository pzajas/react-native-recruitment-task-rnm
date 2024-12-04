import {useAtom} from 'jotai';
import {CustomCharacterListScreen} from '../../../../components/CustomCharacterScreen';
import {favoritesAtom} from '../../../../services/state/state';

const FavoriteCharactersScreen = () => {
  const [favorites] = useAtom(favoritesAtom);

  return (
    <CustomCharacterListScreen
      data={favorites}
      isFavorites={true}
      fetchNextPage={() => {}}
      hasNextPage={false}
      isFetchingNextPage={false}
      isSearching={false}
    />
  );
};

export default FavoriteCharactersScreen;
