import { createContext } from 'react';

export const CartContext = createContext({});

type Props = {
  children: React.ReactNode
}

export const CartProvider = ({ children }: Props) => {

  return (
    <CartContext.Provider value={1}>{children}</CartContext.Provider>
  )
}