import { useState } from 'react';
import { AddProductButton } from '../ProductCard/styles';
import * as C from './styles';

type Props = {
  handleAddToCart: (qty: number) => void;
}

export const AddProdBtn = ({ handleAddToCart }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <C.ButtonsContainer>
      <C.IncremDecremButton onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>-</C.IncremDecremButton>
      <span className='quantity'>{quantity}</span>
      <C.IncremDecremButton onClick={() => setQuantity(quantity + 1)}>+</C.IncremDecremButton>
      <span className='separator'>|</span>
      <AddProductButton width={1.18} height={1.18} size={16} onClick={() => handleAddToCart(quantity)}>Adicionar</AddProductButton>
    </C.ButtonsContainer>
  )
}