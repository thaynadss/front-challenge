import * as P from '../../helpers/priceFormat';
import { CartItem } from '../CartItem';
import * as C from './styles';
import { CartContext } from '../../contexts/CartContext'
import { useContext, useEffect, useState } from 'react';

type Props = {
  cartClick: boolean;
  handleCartClick: (close: boolean) => void;
}

export const WineBoxCart = ({ cartClick, handleCartClick }: Props) => {
  const [subtotal, setSubtotal] = useState<number>(0);
  const { cartState: { cart } } = useContext(CartContext);
  const lengthSubtotal = String(subtotal).split('.')[0].length;

  useEffect(() => {
    const handleCartSubtotal = () => {
      const prices: number[] = [];
      cart.forEach(item => prices.push(item.price))

      const subtotal = prices.reduce((acum, value) => acum + value, 0);
      setSubtotal(subtotal);
    };
    handleCartSubtotal();
  }, [cart]);

  return (
    <C.PageContainer cartClick={cartClick}>
      <C.ScreenContainer onClick={() => handleCartClick(false)} />
      <C.CartContainer>
        <C.CartHeader>
          <C.ArrowLeft src={process.env.PUBLIC_URL + '/icons/arrowLeft.svg'} alt="fechar WineBox" onClick={() => handleCartClick(false)} />
          WineBox ({cart.length})</C.CartHeader>
        <C.ProductsContainer>
          {cart.length === 0 &&
            <>
              <C.EmptyCartStyle size={32} color='#C0C0C0'>=(</C.EmptyCartStyle>
              <C.EmptyCartStyle size={20} color='#1D1D1B'>Você ainda não escolheu seus produtos</C.EmptyCartStyle>
            </>}
          {cart.length > 0 && cart.map(item => (
            <CartItem key={item.id} id={item.id} image={item.image} name={item.name} country={item.country} price={item.price} quantity={item.quantity} />
          ))}
        </C.ProductsContainer>
        {cart.length > 0 &&
          <C.FooterContainer>
            <C.CartSubtotal smallSize={lengthSubtotal > 9 ? true : false}>Total
              <span className='subtotal'>{P.priceFormat(subtotal)}</span>
            </C.CartSubtotal>
            <C.FinishButton>Finalizar pedido</C.FinishButton>
          </C.FooterContainer>
        }
      </C.CartContainer>
    </C.PageContainer >
  )
}