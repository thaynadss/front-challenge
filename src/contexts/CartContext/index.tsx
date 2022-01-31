import { createContext, useEffect, useReducer } from 'react';
import { cartReducer } from './reducer';
import { CartItem } from '../../types/Product';

export const CartContext = createContext({} as contextType);

type Props = {
  children: React.ReactNode
};

type contextType = {
  cartState: { cart: CartItem[] };
  handleCheckItemInCart: (item: CartItem) => void;
  handleIncreaseQuantity: (id: number, quantity: number) => void;
  handleInputQuantity: (id: number, quantity: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  handleRemoveFromCart: (id: number) => void;
};

export const CartProvider = ({ children }: Props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] }, () => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    return cartFromLocalStorage ? { cart: JSON.parse(cartFromLocalStorage) } : { cart: [] };
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.cart));
  }, [cartState.cart]);

  const handleCheckItemInCart = (item: CartItem) => {
    if (cartState.cart.every(c => c.id !== item.id)) {
      handleAddToCart(item);
    } else {
      handleIncreaseQuantity(item.id, item.quantity);
    }
  };

  const handleAddToCart = (item: CartItem) => {
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: item,
    })
  };

  const handleIncreaseQuantity = (id: number, quantity: number) => {
    cartDispatch({
      type: 'INCREASE_QUANTITY',
      payload: { id: id, quantity: quantity },
    })
  };

  const handleInputQuantity = (id: number, quantity: number) => {
    cartDispatch({
      type: 'INPUT_QUANTITY',
      payload: { id: id, quantity: quantity },
    })
  };

  const handleDecreaseQuantity = (id: number) => {
    cartDispatch({
      type: 'DECREASE_QUANTITY',
      payload: { id: id },
    })
  };

  const handleRemoveFromCart = (id: number) => {
    cartDispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id: id },
    })
  };

  return (
    <CartContext.Provider value={{ cartState, handleCheckItemInCart, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveFromCart, handleInputQuantity }}>{children}</CartContext.Provider>
  )
};