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
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    }
    case 'INCREASE_QUANTITY': {
      return {
        ...state,
        cart: state.cart.filter(c => c.id === action.payload.id ? (c.quantity = c.quantity + action.payload.quantity) : c.quantity)
      };
    }
    case 'INPUT_QUANTITY': {
      return {
        ...state,
        cart: state.cart.filter(c => c.id === action.payload.id ? (c.quantity = action.payload.quantity) : c.quantity)
      };
    }
    case 'DECREASE_QUANTITY': {
      return {
        ...state,
        cart: state.cart.filter(c => c.id === action.payload.id && c.quantity > 1 ? --c.quantity : c.quantity)
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