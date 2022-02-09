import * as C from './styles';
import * as P from '../../helpers/priceFormat';
import { CartItem as CartType } from '../../types/Product';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const CartItem = ({ id, image, name, country, price, quantity }: CartType) => {
  const { handleIncreaseQuantity, handleInputQuantity, handleDecreaseQuantity, handleRemoveFromCart } = useContext(CartContext);
  let lengthPrice = String(price).split('.')[0].length;

  const handleIncreaseByInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(parseInt('3')) === isNaN(parseInt(e.target.value))) {
      handleInputQuantity(id, parseInt(e.target.value))
    } else {
      e.preventDefault();
    }
  };

  return (
    <C.CartCardContainer>
      <C.CardImage src={image} alt={name} />
      <C.CardTitle>{name}
        <C.ProductCountry>{country}</C.ProductCountry>
      </C.CardTitle>
      <C.IncremDecremButton>
        <span className='decrement' onClick={() => handleDecreaseQuantity(id)}>-</span>
        <C.QuantityInput type='number' min={1} value={quantity} onChange={e => handleIncreaseByInput(e)} />
        <span className='increment' onClick={() => handleIncreaseQuantity(id, 1)}>+</span>
      </C.IncremDecremButton>
      {lengthPrice <= 10 &&
        <C.ProductValue>
          <span className='currency'>{P.currencyFormat}</span> {P.integerFormat(price)}
          <span className='decimal'>{P.decimalFormat(price)}</span>
        </C.ProductValue>
      }
      {lengthPrice > 10 &&
        <C.SmallProductValue>{P.priceFormat(price)}</C.SmallProductValue>
      }
      <C.RemoveItem onClick={() => handleRemoveFromCart(id)}>x</C.RemoveItem>
    </C.CartCardContainer>
  )
};