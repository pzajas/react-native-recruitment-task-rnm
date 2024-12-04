import AsyncStorage from '@react-native-async-storage/async-storage';
import {atomWithStorage} from 'jotai/utils';
interface AsyncStorageLike {
  getItem: (key: string) => Promise<any | null>;
  setItem: (key: string, value: any) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

const asyncStorage: AsyncStorageLike = {
  getItem: async (key: string): Promise<any | null> => {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (key: string, value: any): Promise<void> => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async (key: string): Promise<void> => {
    await AsyncStorage.removeItem(key);
  },
};

type Favorite = {
  id: string;
  name: string;
  [key: string]: any;
};

export const favoritesAtom = atomWithStorage<Favorite[]>(
  'favorites',
  [],
  asyncStorage,
);
