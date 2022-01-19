import { AddCardButton } from '../AddCardButton';
import * as C from './styles';

export const AddProductButtons = () => {
  return (
    <C.ButtonsContainer>
      <C.IncremDecremButton>-</C.IncremDecremButton>
      <span className='quantity'>1</span>
      <C.IncremDecremButton>+</C.IncremDecremButton>
      <span className='separator'>|</span>
      <AddCardButton width={1.18} height={1.18} size={16} fontStyle='normal' />
    </C.ButtonsContainer>
  )
}