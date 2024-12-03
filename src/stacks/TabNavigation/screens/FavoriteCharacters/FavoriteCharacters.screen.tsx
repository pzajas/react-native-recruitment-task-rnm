import {useAtom} from 'jotai';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {favoritesAtom} from '../../../../services/state/state';
import {CharacterCard} from '../CharacterList/components/card/CharacterCard';

const FavoriteCharactersScreen = () => {
  const [favorites] = useAtom(favoritesAtom);

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorites yet!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item?.id?.toString()}
      renderItem={({item}) => <CharacterCard character={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.flatlist}
    />
  );
};

export default FavoriteCharactersScreen;

export const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  emptyText: {
    fontSize: 18,
    color: '#757575',
    fontWeight: 'bold',
  },
  flatlist: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
});
