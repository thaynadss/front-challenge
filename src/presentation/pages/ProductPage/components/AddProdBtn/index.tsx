import { useState } from 'react';
import { AddProductButton } from 'presentation/pages/CatalogPage/components/ProductCard/styles';
import { QuantitySelectors, ButtonsContainer } from './styles';

type Props = {
  handleAddToCart: (qty: number) => void;
}

export const AddProdBtn = ({ handleAddToCart }: Props) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ButtonsContainer>
      <QuantitySelectors onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>-</QuantitySelectors>
      <span className='quantity'>{quantity}</span>
      <QuantitySelectors onClick={() => setQuantity(quantity + 1)}>+</QuantitySelectors>
      <span className='separator'>|</span>
      <AddProductButton width={1.18} height={1.18} size={16} onClick={() => handleAddToCart(quantity)}>Adicionar</AddProductButton>
    </ButtonsContainer>
  )
}