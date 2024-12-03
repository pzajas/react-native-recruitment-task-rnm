export interface CharacterFilterValues {
  status: 'Alive' | 'Dead' | 'Unknown';
  species: 'Human' | 'Humanoid';
}

export interface CharacterFilters {
  alive: boolean;
  dead: boolean;
  unknown: boolean;
  human: boolean;
  humanoid: boolean;
}
