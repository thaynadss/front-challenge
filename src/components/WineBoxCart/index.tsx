import * as P from '../../helpers/priceFormat';
import { CartItem } from '../CartItem';
import * as C from './styles';
import { CartContext } from '../../contexts/CartContext'
import { useContext, useEffect, useState } from 'react';

type Props = {
  cartClick: boolean;
  handleCart: () => void;
}

export const WineBoxCart = ({ cartClick, handleCart }: Props) => {
  const [subtotal, setSubtotal] = useState<string>(P.priceFormat(0));
  const { cartState: { cart } } = useContext(CartContext);

  useEffect(() => {
    const handleCartSubtotal = () => {
      const prices: number[] = [];
      cart.forEach(item => prices.push(item.price))

      const subtotal = prices.reduce((acum, value) => acum + value, 0);
      setSubtotal(P.priceFormat(subtotal));
    };
    handleCartSubtotal();
  }, [cart]);

  return (
    <C.ScreenContainer cartClick={cartClick}>
      <C.CartContainer>
        <C.CartHeader>
          <C.ArrowLeft src={process.env.PUBLIC_URL + '/icons/arrowLeft.svg'} alt="fechar WineBox" onClick={() => handleCart()} />
          WineBox ({cart.length})</C.CartHeader>
        <C.ProductsContainer>
          {cart.length === 0 && '=( Você ainda não escolheu seus produtos'}
          {cart.length > 0 && cart.map(item => (
            <CartItem key={item.id} id={item.id} image={item.image} name={item.name} country={item.country} price={item.price} quantity={item.quantity} />
          ))}
        </C.ProductsContainer>
        <C.FooterContainer>
          <C.CartSubtotal>Total
            <span className='subtotal'>{subtotal}</span>
          </C.CartSubtotal>
          <C.FinishButton>Finalizar pedido</C.FinishButton>
        </C.FooterContainer>
      </C.CartContainer>
    </C.ScreenContainer>
  )
}