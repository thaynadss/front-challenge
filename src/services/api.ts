import axios from 'axios';
import { State } from 'presentation/contexts/CatalogContext/reducer';

export const api = axios.create({
  baseURL: 'https://wine-back-test.herokuapp.com/',
});

export async function getProducts({ filter, search }: State) {
  try {
    const { data } = await api.get(`/products?${search}${filter}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};