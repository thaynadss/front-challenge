export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const INPUT_QUANTITY = 'INPUT_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export type idParam = {
  id: number
};

export type idAndQuantityParam = idParam & {
  quantity: number
};