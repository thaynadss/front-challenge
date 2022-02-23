import { createContext, useContext, useEffect, useReducer } from 'react';
import { cartReducer } from './reducer';
import { CartItem } from 'types/Product';
import { ChildrenComponent } from 'types/ChildrenComponent';
import * as types from './types';

export const CartContext = createContext({} as contextType);

type contextType = {
  cartState: { cart: CartItem[] };
  handleCheckItemInCart: (item: CartItem) => void;
  handleIncreaseQuantity: (param: types.idAndQuantityParam) => void;
  handleInputQuantity: (param: types.idAndQuantityParam) => void;
  handleDecreaseQuantity: (param: types.idParam) => void;
  handleRemoveFromCart: (param: types.idParam) => void;
};

export const CartProvider = ({ children }: ChildrenComponent) => {
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
      handleIncreaseQuantity({ id: item.id, quantity: item.quantity });
    }
  };

  const handleAddToCart = (item: CartItem) => {
    cartDispatch({
      type: types.ADD_TO_CART,
      payload: item,
    })
  };

  const handleIncreaseQuantity = (param: types.idAndQuantityParam) => {
    cartDispatch({
      type: types.INCREASE_QUANTITY,
      payload: { id: param.id, quantity: param.quantity },
    })
  };

  const handleInputQuantity = (param: types.idAndQuantityParam) => {
    cartDispatch({
      type: types.INPUT_QUANTITY,
      payload: { id: param.id, quantity: param.quantity },
    })
  };

  const handleDecreaseQuantity = (param: types.idParam) => {
    cartDispatch({
      type: types.DECREASE_QUANTITY,
      payload: { id: param.id },
    })
  };

  const handleRemoveFromCart = (param: types.idParam) => {
    cartDispatch({
      type: types.REMOVE_FROM_CART,
      payload: { id: param.id },
    })
  };

  return (
    <CartContext.Provider value={{ cartState, handleCheckItemInCart, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveFromCart, handleInputQuantity }}>{children}</CartContext.Provider>
  )
};

export const useCartContext = () => {
  return useContext(CartContext)
};