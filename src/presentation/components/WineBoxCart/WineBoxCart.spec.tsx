import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { WineBoxCart } from '.';
import { cartMock } from 'presentation/tests/cartMock';
import contextRender from 'presentation/tests/contextRender';

describe('<WineBoxCart />', () => {
  const handleCartClick = jest.fn();

  describe('Render component with empty cart', () => {
    const { cart } = contextRender({});

    it('should render a phrase informing that no products have been added yet if the cart is empty and should not render the footer', () => {
      cart(<WineBoxCart cartClick={true} handleCartClick={handleCartClick} />);

      const emptyCart = screen.getByText(/você ainda não escolheu seus produtos/i);
      const total = screen.queryByText(/total/i);
      const finishButton = screen.queryByRole('button', { name: /finalizar pedido/i });

      expect(emptyCart).toBeInTheDocument();
      expect(total).not.toBeInTheDocument();
      expect(finishButton).not.toBeInTheDocument();
    });
  });

  describe('Render component with mock cart', () => {
    const { cart } = contextRender({ cartSt: { cart: cartMock } });

    it('should call function to close the cart when it is clicked outside the cart container', () => {
      cart(<WineBoxCart cartClick={true} handleCartClick={handleCartClick} />);

      const screenOutside = screen.getByTestId('screen');

      userEvent.click(screenOutside);

      expect(handleCartClick).toHaveBeenCalledWith(false);
    });

    it('should call function to close the cart when the arrow left icon is clicked', () => {
      cart(<WineBoxCart cartClick={true} handleCartClick={handleCartClick} />);

      const arrowLeft = screen.getByAltText(/fechar winebox/i);

      userEvent.click(arrowLeft);

      expect(handleCartClick).toHaveBeenCalledWith(false);
    });

    it('should verify that the counter is showing the correct quantity of the products that are in the cart', () => {
      cart(<WineBoxCart cartClick={true} handleCartClick={handleCartClick} />);

      const counter = screen.getByText(/winebox/i);

      expect(counter).toHaveTextContent('WineBox (3)');
    });

    it('should render the products if any have been added to cart', () => {
      cart(<WineBoxCart cartClick={true} handleCartClick={handleCartClick} />);

      const products = screen.getAllByRole('heading', { name: /vinho/i });

      expect(products).toHaveLength(3);
      expect(products[0]).toHaveTextContent('Vinho 1');
      expect(products[1]).toHaveTextContent('Vinho 2');
      expect(products[2]).toHaveTextContent('Vinho 3');
    });

    it('should not render a phrase informing that no products have been added if there are products in the cart', () => {
      cart(<WineBoxCart cartClick={true} handleCartClick={handleCartClick} />);

      const emptyCart = screen.queryByText(/você ainda não escolheu seus produtos/i);

      expect(emptyCart).not.toBeInTheDocument();
    });

    it('should render footer with subtotal value if there are products in cart', () => {
      cart(<WineBoxCart cartClick={true} handleCartClick={handleCartClick} />);

      const finishButton = screen.getByRole('button', { name: /finalizar pedido/i });
      const total = screen.getByText(/total/i);

      expect(finishButton).toBeInTheDocument();
      expect(total).toHaveTextContent('R$ 288,00');
    });
  });
});