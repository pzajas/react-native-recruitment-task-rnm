import {useState} from 'react';
import {
  CharacterFilters,
  CharacterFilterValues,
} from '../typescript/filterTypes';

export const useCharacterFilter = (characters: CharacterFilterValues[]) => {
  const [statusFilter, setStatusFilter] = useState<CharacterFilters>({
    alive: false,
    dead: false,
    unknown: false,
  });

  const [speciesFilter, setSpeciesFilter] = useState<CharacterFilters>({
    human: false,
    humanoid: false,
  });

  const [filteredCharacters, setFilteredCharacters] = useState<
    CharacterFilterValues[]
  >([]);

  const toggleFilter = (
    type: 'status' | 'species',
    value: 'alive' | 'dead' | 'unknown' | 'human' | 'humanoid',
  ) => {
    if (type === 'status') {
      setStatusFilter(prevState => ({
        ...prevState,
        [value]: !prevState[value],
      }));
    } else if (type === 'species') {
      setSpeciesFilter(prevState => ({
        ...prevState,
        [value]: !prevState[value],
      }));
    }
  };

  const applyFilters = () => {
    const filtered = characters.filter(character => {
      const statusMatches =
        (statusFilter.alive && character.status === 'Alive') ||
        (statusFilter.dead && character.status === 'Dead') ||
        (statusFilter.unknown && character.status === 'unknown');

      const speciesMatches =
        (speciesFilter.human && character.species.toLowerCase() === 'human') ||
        (speciesFilter.humanoid && character.species === 'Humanoid');

      const statusFilterApplied =
        statusFilter.alive || statusFilter.dead || statusFilter.unknown;

      const speciesFilterApplied =
        speciesFilter.human || speciesFilter.humanoid;

      return (
        (statusFilterApplied ? statusMatches : true) &&
        (speciesFilterApplied ? speciesMatches : true)
      );
    });

    setFilteredCharacters(filtered);
  };

  const resetFilters = () => {
    setStatusFilter({
      alive: false,
      dead: false,
      unknown: false,
    });
    setSpeciesFilter({
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
    speciesFilter,
    applyFilters,
  };
};
