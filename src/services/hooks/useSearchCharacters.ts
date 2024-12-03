import {useQuery} from '@tanstack/react-query';
import {useDebounce} from '../../hooks/useDebounce';
import {searchCharacters} from '../api/searchCharacters';

export const useSearchCharacters = (
  searchQuery: string,
  debounceDelay = 500,
) => {
  const debouncedSearchQuery = useDebounce(searchQuery, debounceDelay);

  return useQuery({
    queryKey: ['searchCharacters', debouncedSearchQuery],
    queryFn: () => searchCharacters(debouncedSearchQuery),
    enabled: !!debouncedSearchQuery,
  });
};
