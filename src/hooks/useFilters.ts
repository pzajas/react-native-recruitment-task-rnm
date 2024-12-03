import {useState} from 'react';
import {
  CharacterFilters,
  CharacterFilterValues,
} from '../typescript/filterTypes';

const useCharacterFilter = (characters: CharacterFilterValues[]) => {
  const [statusFilter, setStatusFilter] = useState<CharacterFilters>({
    alive: false,
    dead: false,
    unknown: false,
    human: false,
    humanoid: false,
  });

  const [filteredCharacters, setFilteredCharacters] = useState<
    CharacterFilterValues[]
  >([]);

  const toggleFilter = (
    type: 'status' | 'species',
    value: keyof CharacterFilters,
  ) => {
    if (type === 'status') {
      setStatusFilter(prevState => ({
        ...prevState,
        [value]: !prevState[value],
      }));
    } else if (type === 'species') {
      setStatusFilter(prevState => ({
        ...prevState,
        [value]: !prevState[value],
      }));
    }
  };

  const applyFilters = () => {
    if (
      statusFilter.alive ||
      statusFilter.dead ||
      statusFilter.unknown ||
      statusFilter.human ||
      statusFilter.humanoid
    ) {
      const filtered = characters.filter(character => {
        const statusMatches =
          (statusFilter.alive && character.status === 'Alive') ||
          (statusFilter.dead && character.status === 'Dead') ||
          (statusFilter.unknown && character.status === 'Unknown');
        const speciesMatches =
          (statusFilter.human && character.species === 'Human') ||
          (statusFilter.humanoid && character.species === 'Humanoid');

        return (
          (statusMatches ||
            (!statusFilter.alive &&
              !statusFilter.dead &&
              !statusFilter.unknown)) &&
          (speciesMatches || (!statusFilter.human && !statusFilter.humanoid))
        );
      });

      setFilteredCharacters(filtered);
    } else {
      setFilteredCharacters([]);
    }
  };

  const resetFilters = () => {
    setStatusFilter({
      alive: false,
      dead: false,
      unknown: false,
      human: false,
      humanoid: false,
    });
    setFilteredCharacters([]);
  };

  return {
    filteredCharacters,
    toggleFilter,
    resetFilters,
    statusFilter,
    speciesFilter: statusFilter,
    applyFilters,
  };
};

export default useCharacterFilter;
