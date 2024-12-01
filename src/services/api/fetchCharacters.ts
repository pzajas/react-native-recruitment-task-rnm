import {AxiosError} from 'axios';
import {axiosInstance} from './axiosInstance';

export const fetchCharacters = async ({pageParam = 1}) => {
  try {
    const response = await axiosInstance.get(`/character?page=${pageParam}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.data?.error || 'An error occurred while fetching data';
      throw new Error(errorMessage);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
