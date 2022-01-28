import { AddProductButton } from '../ProductCard/styles';
import * as C from './styles';

export const AddProductButtons = () => {
  return (
    <C.ButtonsContainer>
      <C.IncremDecremButton>-</C.IncremDecremButton>
      <span className='quantity'>1</span>
      <C.IncremDecremButton>+</C.IncremDecremButton>
      <span className='separator'>|</span>
      <AddProductButton width={1.18} height={1.18} size={16} >Adicionar</AddProductButton>
    </C.ButtonsContainer>
  )
}