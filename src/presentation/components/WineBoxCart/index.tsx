import { CartItem } from 'presentation/components/CartItem';
import { priceFormat } from 'presentation//helpers/priceFormat';
import { ScreenContainer, ProductsContainer, PageContainer, FooterContainer, FinishButton, EmptyCartStyle, CartSubtotal, CartHeader, CartContainer, ArrowLeft } from './styles';
import { useCartContext } from 'presentation/contexts/CartContext'
import { useEffect, useState } from 'react';
import { themeColors } from 'presentation/styles/themeColors';

type Props = {
  isCartClick: boolean;
  handleIsCartClick: (close: boolean) => void;
}

export const WineBoxCart = ({ isCartClick, handleIsCartClick }: Props) => {
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
    <PageContainer isCartClick={isCartClick}>
      <ScreenContainer data-testid='screen' onClick={() => handleIsCartClick(false)} />
      <CartContainer>
        <CartHeader>
          <ArrowLeft src={process.env.PUBLIC_URL + '/icons/arrowLeft.svg'} alt="Fechar WineBox" onClick={() => handleIsCartClick(false)} />
          WineBox ({cart.length})</CartHeader>
        <ProductsContainer>
          {cart.length === 0 &&
            <>
              <EmptyCartStyle size={32} color={themeColors.text.gray1}>=(</EmptyCartStyle>
              <EmptyCartStyle size={20} color={themeColors.text.gray8}>Você ainda não escolheu seus produtos</EmptyCartStyle>
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