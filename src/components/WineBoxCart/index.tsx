import { CartProducts } from '../CartProducts';
import * as C from './styles';

type Props = {
  cartClick: boolean;
  setCartClick: (param: boolean) => void;
}

export const WineBoxCart = ({ cartClick, setCartClick }: Props) => {
  return (
    <C.ScreenContainer cartClick={cartClick}>
      <C.CartContainer>
        <C.CartHeader>
          <C.ArrowLeft src={process.env.PUBLIC_URL + '/icons/arrowLeft.svg'} alt="fechar WineBox" onClick={() => setCartClick(!cartClick)} />
          WineBox (1)</C.CartHeader>
        <C.ProductsContainer>
          <CartProducts />
          <CartProducts />
          <CartProducts />
          <CartProducts />
          <CartProducts />
          <CartProducts />
        </C.ProductsContainer>
        <C.FooterContainer>
          <C.CartSubtotal>Total
            <span className='subtotal'>R$
              <span className='value'>37,40</span>
            </span>
          </C.CartSubtotal>
          <C.FinishButton>Finalizar pedido</C.FinishButton>
        </C.FooterContainer>
      </C.CartContainer>
    </C.ScreenContainer>
  )
}