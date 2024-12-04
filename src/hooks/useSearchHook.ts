import {useMemo, useState} from 'react';

export const useSearch = <T>(data: T[], keyExtractor: (item: T) => string) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return data;
    }

    const lowercasedQuery = searchQuery.toLowerCase();
    return data.filter(item =>
      keyExtractor(item).toLowerCase().includes(lowercasedQuery),
    );
  }, [data, searchQuery, keyExtractor]);

  const clearSearch = () => setSearchQuery('');

  return {
    searchQuery,
    setSearchQuery,
    clearSearch,
    filteredData,
  };
};
