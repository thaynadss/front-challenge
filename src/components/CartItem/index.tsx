import * as C from './styles';
import * as P from '../../helpers/priceFormat';
import { CartItem as CartType } from '../../types/Product';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const CartItem = ({ id, image, name, country, price, quantity }: CartType) => {
  const { handleIncreaseQuantity, handleInputQuantity, handleDecreaseQuantity, handleRemoveFromCart } = useContext(CartContext);

  // const handleIncreaseByInput = (e: number) => {
  //   if (typeof e === 'number') {
  //     handleInputQuantity(id, e)
  //   }
  // }

  // const handlePreventDefault = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0') {
  //     handleInputQuantity(id, Number(e))
  //   }
  //   else {
  //     return e.preventDefault()
  //   }
  // }

  return (
    <C.CartCardContainer>
      <C.CardImage src={image} alt={name} />
      <C.CardTitle>{name}
        <C.ProductCountry>{country}</C.ProductCountry>
      </C.CardTitle>
      <C.IncremDecremButton>
        <span className='decrement' onClick={() => handleDecreaseQuantity(id)}>-</span>
        <C.QuantityInput name='quantity' type='text' value={quantity} onChange={e => handleInputQuantity(id, Number(e.target.value))} />
        <span className='increment' onClick={() => handleIncreaseQuantity(id, 1)}>+</span>
      </C.IncremDecremButton>
      <C.ProductValue>
        <span className='currency'>{P.currencyFormat}</span> {P.integerFormat(price)}
        <span className='decimal'>{P.decimalFormat(price)}</span>
      </C.ProductValue>
      <C.RemoveItem onClick={() => handleRemoveFromCart(id)}>x</C.RemoveItem>
    </C.CartCardContainer>
  )
};