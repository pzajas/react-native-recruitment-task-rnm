import {AxiosError} from 'axios';
import {axiosInstance} from './axiosInstance';

export const searchCharacters = async (searchQuery: string) => {
  try {
    const response = await axiosInstance.get(`/character?name=${searchQuery}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.error;
      if (errorMessage === 'There is nothing here') {
        return {results: []};
      }
      throw new Error(errorMessage || 'An error occurred while searching');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
