import {FlatList} from 'react-native';
import {Character} from '../../../../../../typescript/characterTypes';
import {CharacterCard} from '../card/CharacterCard';
import {styles} from './CharacterList.styled';

interface CharactersListProps {
  data: Character[];
  handleEndReached: () => void;
}

export const CharactersList: React.FC<CharactersListProps> = ({
  data,
  handleEndReached,
}) => (
  <FlatList
    data={data}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => <CharacterCard character={item} />}
    showsVerticalScrollIndicator={false}
    onEndReached={handleEndReached}
    onEndReachedThreshold={0.5}
    style={styles.flatlistMargin}
  />
);
