import { Reducer } from 'react';
import { CartItem } from '../../types/Product'

export type State = {
  cart: CartItem[];
}

export type Action =
  | { type: 'ADD_TO_CART', payload: CartItem[] }
  | { type: 'INCREASE_QUANTITY', payload: { id: number, quantity: number } }
  | { type: 'DECREASE_QUANTITY', payload: number }
  | { type: 'REMOVE_FROM_CART', payload: number };

export const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return { ...state };
    }
    case 'INCREASE_QUANTITY': {
      return { ...state };
    }
    case 'DECREASE_QUANTITY': {
      return { ...state };
    }
    case 'REMOVE_FROM_CART': {
      return { ...state };
    }
    default:
      return state;
  }
}