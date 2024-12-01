import {useInfiniteQuery} from '@tanstack/react-query';
import {fetchCharacters} from '../api/fetchCharacters';

export const useCharacters = () => {
  return useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    getNextPageParam: lastPage =>
      lastPage.info.next ? lastPage.info.next.split('=')[1] : undefined,
    initialPageParam: 1,
  });
};
