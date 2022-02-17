import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { WineBoxCart } from '.';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../../types/Product';
import { cartMock } from './cartMock';

const handleCheckItemInCart = jest.fn();
const handleIncreaseQuantity = jest.fn();
const handleInputQuantity = jest.fn();
const handleDecreaseQuantity = jest.fn();
const handleRemoveFromCart = jest.fn();
const handleCartClick = jest.fn();

const renderWineBoxCart = (items: CartItem[]): RenderResult => {
  return render(
    <CartContext.Provider value={{
      cartState: { cart: items },
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
  it('should call function to close the cart when it is clicked outside the cart container', () => {
    renderWineBoxCart(cartMock);

    const screenOutside = screen.getByTestId('screen');
    userEvent.click(screenOutside);
    expect(handleCartClick).toHaveBeenCalledWith(false);
  });

  it('should call function to close the cart when the arrow left icon is clicked', () => {
    renderWineBoxCart(cartMock);

    const arrowLeft = screen.getByAltText(/fechar winebox/i);
    userEvent.click(arrowLeft);
    expect(handleCartClick).toHaveBeenCalledWith(false);
  });

  it('should verify that the counter is showing the correct quantity of the products that are in the cart', () => {
    renderWineBoxCart(cartMock);

    const counter = screen.getByText(/winebox/i);
    expect(counter).toHaveTextContent('WineBox (3)');
  });

  it('should render a phrase informing that no products have been added yet if the cart is empty and should not render the footer', () => {
    renderWineBoxCart([]);

    const emptyCart = screen.getByText(/você ainda não escolheu seus produtos/i);
    const total = screen.queryByText(/total/i);
    const finishButton = screen.queryByRole('button', { name: /finalizar pedido/i });

    expect(emptyCart).toBeInTheDocument();
    expect(total).not.toBeInTheDocument();
    expect(finishButton).not.toBeInTheDocument();
  });

  it('should render the products if any have been added to cart', () => {
    renderWineBoxCart(cartMock);

    const products = screen.getAllByRole('heading', { name: /vinho/i });
    expect(products).toHaveLength(3);
    expect(products[0]).toHaveTextContent('Vinho 1');
    expect(products[1]).toHaveTextContent('Vinho 2');
    expect(products[2]).toHaveTextContent('Vinho 3');
  });

  it('should not render a phrase informing that no products have been added if there are products in the cart', () => {
    renderWineBoxCart(cartMock);

    const emptyCart = screen.queryByText(/você ainda não escolheu seus produtos/i);
    expect(emptyCart).not.toBeInTheDocument();
  });

  it('should render footer with subtotal value if there are products in cart', () => {
    renderWineBoxCart(cartMock);

    const finishButton = screen.getByRole('button', { name: /finalizar pedido/i });
    expect(finishButton).toBeInTheDocument();

    const total = screen.getByText(/total/i);
    expect(total).toHaveTextContent('R$ 288,00');
  });
});