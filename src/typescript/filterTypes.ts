export interface CharacterFilterValues {
  status: 'alive' | 'dead' | 'unknown';
  species: 'human' | 'humanoid';
}

type CharacterFilters = {
  status: {
    alive: boolean;
    dead: boolean;
    unknown: boolean;
  };
  species: {
    human: boolean;
    humanoid: boolean;
  };
};
export interface FilterModalProps {
  statusFilter: CharacterFilters['status'];
  speciesFilter: CharacterFilters['species'];
  toggleFilter: (
    type: 'status' | 'species',
    value: keyof CharacterFilters['status'] | keyof CharacterFilters['species'],
  ) => void;
  applyFilters: () => void;
  resetFilters: () => void;
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
}
export type FilterSectionProps = {
  title: string;
  options: ('alive' | 'dead' | 'unknown' | 'human' | 'humanoid')[];
  selectedOptions: Record<string, boolean>;
  toggleFilter: (
    type: 'status' | 'species',
    value: 'alive' | 'dead' | 'unknown' | 'human' | 'humanoid',
  ) => void;
};
export interface FilterOptionProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}
