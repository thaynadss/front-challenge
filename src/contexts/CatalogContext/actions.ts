import api from '../../services/api';
import { State } from './reducer';

export async function getProducts({ filter, search }: State) {
  try {
    const { data } = await api.get(`/products?${filter}${search}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
