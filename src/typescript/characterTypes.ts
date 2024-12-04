import {RouteProp} from '@react-navigation/native';
import {
  CharacterDetailsStackNavigationProp,
  CharacterDetailsStackParamList,
} from '../stacks/CharacterDetails/CharacterDetails.routes';
export interface Origin {
  name: string;
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: Origin;
}
export interface CustomCharacterListScreenProps {
  data: Character[];
  isFavorites: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isSearching: boolean;
}
export interface CharacterDetailsScreenProps {
  route: CharacterDetailsScreenRouteProp;
  navigation: CharacterDetailsStackNavigationProp;
}

export type CharacterDetailsScreenRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;
