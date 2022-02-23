import { Reducer } from 'react';
import * as types from './types';

export type State = {
  filter: string;
  search: string;
}

export type Action =
  | { type: 'FILTER_SELECTED', payload: string }
  | { type: 'SEARCHED_TEXT', payload: string };

export const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case types.FILTER_SELECTED: {
      return { ...state, filter: action.payload };
    }
    case types.SEARCHED_TEXT: {
      return { ...state, search: action.payload, filter: '' };
    }
    default:
      return state;
  }
}