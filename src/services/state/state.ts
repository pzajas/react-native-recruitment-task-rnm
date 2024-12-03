import AsyncStorage from '@react-native-async-storage/async-storage';
import {atomWithStorage} from 'jotai/utils';

const asyncStorage = {
  getItem: async key => {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async key => {
    await AsyncStorage.removeItem(key);
  },
};

export const favoritesAtom = atomWithStorage('favorites', [], asyncStorage);
