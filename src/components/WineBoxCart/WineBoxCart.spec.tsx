import { render, RenderResult } from '@testing-library/react';
import { WineBoxCart } from '.';
import { CartContext } from '../../contexts/CartContext';

const cartState = { cart: [] };
const handleCheckItemInCart = jest.fn();
const handleIncreaseQuantity = jest.fn();
const handleInputQuantity = jest.fn();
const handleDecreaseQuantity = jest.fn();
const handleRemoveFromCart = jest.fn();
const handleCartClick = jest.fn();

const renderWineBoxCart = (): RenderResult => {
  return render(
    <CartContext.Provider value={{
      cartState: cartState,
      handleCheckItemInCart: handleCheckItemInCart,
      handleIncreaseQuantity: handleIncreaseQuantity,
      handleInputQuantity: handleInputQuantity,
      handleDecreaseQuantity: handleDecreaseQuantity,
      handleRemoveFromCart: handleRemoveFromCart
    }}>
      <WineBoxCart cartClick={true} handleCartClick={handleCartClick} />
    </CartContext.Provider>
  );
};

describe('<WineBoxCart />', () => {
  it('should do something', () => {
    renderWineBoxCart();
  })
})