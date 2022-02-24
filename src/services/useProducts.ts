import { api } from './api';
import { useQuery } from 'react-query';
import { Product } from 'types/Product';
import { State } from 'presentation/contexts/CatalogContext/reducer';

type Products = {
  items: Product[];
  totalItems: number;
}

export async function getProducts({ filter, search }: State): Promise<Products> {
  const { data } = await api.get(`/products?${search}${filter}`)

  const products: Products = {
    items: data.items,
    totalItems: data.totalItems
  }
  return products
};

export function useProducts({ filter, search }: State) {
  return useQuery<Products, Error>(
    ['products', filter, search],
    () => getProducts({ filter, search })
  );
};