import {useAtom} from 'jotai';
import {favoritesAtom} from '../services/state/state';
import {Character} from '../typescript/characterTypes';

export const useFavorites = () => {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const isFavorite = (character: Character): boolean =>
    favorites.some(fav => fav.id === character.id);

  const toggleFavorite = (character: Character) => {
    if (isFavorite(character)) {
      setFavorites(favorites.filter(fav => fav.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  };

  return {favorites, isFavorite, toggleFavorite};
};
