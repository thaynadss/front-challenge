import { Reducer } from 'react';
import { CartItem } from '../../types/Product';

export type Action =
  | { type: 'ADD_TO_CART', payload: CartItem }
  | { type: 'INCREASE_QUANTITY', payload: { id: number, quantity: number } }
  | { type: 'INPUT_QUANTITY', payload: { id: number, quantity: number } }
  | { type: 'DECREASE_QUANTITY', payload: { id: number } }
  | { type: 'REMOVE_FROM_CART', payload: { id: number } };

export const cartReducer: Reducer<{ cart: CartItem[] }, Action> = (state: { cart: CartItem[] }, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let auxArray: CartItem = action.payload;
      auxArray.price = auxArray.quantity * auxArray.price;

      return {
        ...state,
        cart: [...state.cart, auxArray]
      };
    }
    case 'INCREASE_QUANTITY': {
      let auxArray: CartItem[] = state.cart.filter(c => c.id === action.payload.id ? (c.price /= c.quantity, c.quantity += action.payload.quantity) : c.quantity);

      return {
        ...state,
        cart: auxArray.filter(c => c.id === action.payload.id ? (c.price *= c.quantity) : c.price)
      };
    }
    case 'INPUT_QUANTITY': {
      let auxArray: CartItem[] = state.cart.filter(c => c.id === action.payload.id ? (c.price /= c.quantity, c.quantity = action.payload.quantity) : c.quantity);

      return {
        ...state,
        cart: auxArray.filter(c => c.id === action.payload.id ? (c.price *= action.payload.quantity) : c.price)
      };
    }
    case 'DECREASE_QUANTITY': {
      let auxArray: CartItem[] = state.cart.filter(c => c.id === action.payload.id && c.quantity > 1 ? (c.price /= c.quantity, c.quantity -= 1) : c.quantity)

      return {
        ...state,
        cart: auxArray.filter(c => c.id === action.payload.id ? (c.price *= c.quantity) : c.price)
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter(c => c.id !== action.payload.id)
      };
    }
    default:
      return state;
  }
}