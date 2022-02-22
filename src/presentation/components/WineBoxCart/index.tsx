import { CartItem } from 'presentation/components/CartItem';
import { priceFormat } from 'presentation//helpers/priceFormat';
import { ScreenContainer, ProductsContainer, PageContainer, FooterContainer, FinishButton, EmptyCartStyle, CartSubtotal, CartHeader, CartContainer, ArrowLeft } from './styles';
import { useCartContext } from 'presentation/contexts/CartContext'
import { useEffect, useState } from 'react';

type Props = {
  cartClick: boolean;
  handleCartClick: (close: boolean) => void;
}

export const WineBoxCart = ({ cartClick, handleCartClick }: Props) => {
  const [subtotal, setSubtotal] = useState(0);
  const { cartState: { cart } } = useCartContext();
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
    <PageContainer cartClick={cartClick}>
      <ScreenContainer data-testid='screen' onClick={() => handleCartClick(false)} />
      <CartContainer>
        <CartHeader>
          <ArrowLeft src={process.env.PUBLIC_URL + '/icons/arrowLeft.svg'} alt="Fechar WineBox" onClick={() => handleCartClick(false)} />
          WineBox ({cart.length})</CartHeader>
        <ProductsContainer>
          {cart.length === 0 &&
            <>
              <EmptyCartStyle size={32} color='#C0C0C0'>=(</EmptyCartStyle>
              <EmptyCartStyle size={20} color='#1D1D1B'>Você ainda não escolheu seus produtos</EmptyCartStyle>
            </>}
          {cart.length > 0 && cart.map(item => (
            <CartItem key={item.id} id={item.id} image={item.image} name={item.name} country={item.country} price={item.price} quantity={item.quantity} />
          ))}
        </ProductsContainer>
        {cart.length > 0 &&
          <FooterContainer>
            <CartSubtotal smallSize={lengthSubtotal > 9 ? true : false}>Total
              <span className='subtotal'>{priceFormat(subtotal)}</span>
            </CartSubtotal>
            <FinishButton>Finalizar pedido</FinishButton>
          </FooterContainer>
        }
      </CartContainer>
    </PageContainer >
  )
}