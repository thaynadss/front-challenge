import { createContext, useContext, useState } from 'react';
import { Product } from 'types/Product';
import { data } from './data';
import { ChildrenComponent } from 'types/ChildrenComponent';

export const ProductContext = createContext({} as contextType);

type contextType = {
  handleProductPage: (item: Product) => void;
  item: Product;
};

export const ProductProvider = ({ children }: ChildrenComponent) => {
  const [item, setItem] = useState<Product>(data);

  const handleProductPage = (item: Product) => {
    setItem(item);
  }

  return (
    <ProductContext.Provider value={{ handleProductPage, item }}>{children}</ProductContext.Provider>
  )
};

export const useProductContext = () => {
  return useContext(ProductContext);
}