import { CardImage, CartCardContainer, CardTitle, QuantitySelectors, ProductCountry, ProductValue, SmallProductValue, RemoveItem, QuantityInput } from './styles';
import { priceFormat, integerFormat, decimalFormat, currencyFormat } from 'presentation/helpers/priceFormat';
import { useCartContext } from 'presentation/contexts/CartContext';
import { CartItem as CartType } from 'types/Product';

export const CartItem = ({ id, image, name, country, price, quantity }: CartType) => {
  const { handleIncreaseQuantity, handleInputQuantity, handleDecreaseQuantity, handleRemoveFromCart } = useCartContext();
  let lengthPrice = String(price).split('.')[0].length;

  const handleIncreaseByInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(parseInt('3')) === isNaN(parseInt(e.target.value))) {
      handleInputQuantity({ id: id, quantity: parseInt(e.target.value) })
    } else {
      e.preventDefault();
    }
  };

  return (
    <CartCardContainer>
      <CardImage src={image} alt={name} />
      <CardTitle>{name}
        <ProductCountry>{country}</ProductCountry>
      </CardTitle>
      <QuantitySelectors>
        <span className='decrement' onClick={() => handleDecreaseQuantity({ id: id })}>-</span>
        <QuantityInput type='number' min={1} value={quantity} onChange={e => handleIncreaseByInput(e)} />
        <span className='increment' onClick={() => handleIncreaseQuantity({ id: id, quantity: 1 })}>+</span>
      </QuantitySelectors>
      {lengthPrice <= 10 &&
        <ProductValue>
          <span className='currency'>{currencyFormat}</span> {integerFormat(price)}
          <span className='decimal'>{decimalFormat(price)}</span>
        </ProductValue>
      }
      {lengthPrice > 10 &&
        <SmallProductValue>{priceFormat(price)}</SmallProductValue>
      }
      <RemoveItem title='Remover item' onClick={() => handleRemoveFromCart({ id: id })}>x</RemoveItem>
    </CartCardContainer>
  )
};