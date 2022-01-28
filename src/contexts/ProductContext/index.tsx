import { createContext, useState } from 'react';
import { Product } from '../../types/Product';
import { data } from './data';

export const ProductContext = createContext({} as contextType);

type Props = {
  children: React.ReactNode
};

type contextType = {
  handlePageProduct: (item: Product) => void;
  item: Product;
}

export const ProductProvider = ({ children }: Props) => {
  const [item, setItem] = useState<Product>(data);

  const handlePageProduct = (item: Product) => {
    setItem(item);
  }

  return (
    <ProductContext.Provider value={{ handlePageProduct, item }}>{children}</ProductContext.Provider>
  )
}