import axios from 'axios';
import {URLS} from '../../constants/urls';

export const axiosInstance = axios.create({
  baseURL: URLS.BASE_API_URL,
});
