import {FlatList, View} from 'react-native';
import {LoadingIndicator} from '../../../../components/indicators/LoadingIndicator';
import {useCharacters} from '../../../../services/hooks/useCharacters';
import {CharacterCard} from './components/CharacterCard';
import {styles} from './styles/CharacterList.styled';

function CharacterList() {
  const {data, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useCharacters();

  const characters = data?.pages?.flatMap(page => page.results);

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CharacterCard character={item} />}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
      />
      {isFetchingNextPage && <LoadingIndicator />}
    </View>
  );
}

export default CharacterList;
