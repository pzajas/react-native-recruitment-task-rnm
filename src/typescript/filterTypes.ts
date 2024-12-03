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
export interface FilterSectionProps {
  title: 'status' | 'species';
  options: string[];
  selectedOptions: Record<string, boolean>;
  toggleFilter: (type: 'status' | 'species', value: string) => void;
}
export interface FilterOptionProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}
