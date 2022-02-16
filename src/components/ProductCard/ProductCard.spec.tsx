import { render, RenderResult, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import { ProductCard } from '.';
import { productMock, itemMock } from './productMock';
import userEvent from '@testing-library/user-event';
import { CartContext } from '../../contexts/CartContext';

const handleProductPage = jest.fn();
const cartState = { cart: [] };
const handleCheckItemInCart = jest.fn();
const handleIncreaseQuantity = jest.fn();
const handleInputQuantity = jest.fn();
const handleDecreaseQuantity = jest.fn();
const handleRemoveFromCart = jest.fn();

const renderProductCard = (): RenderResult => {
  return render(
    <BrowserRouter>
      <CartContext.Provider value={{
        cartState: cartState,
        handleCheckItemInCart: handleCheckItemInCart,
        handleIncreaseQuantity: handleIncreaseQuantity,
        handleInputQuantity: handleInputQuantity,
        handleDecreaseQuantity: handleDecreaseQuantity,
        handleRemoveFromCart: handleRemoveFromCart
      }}>
        <ProductContext.Provider value={{
          handleProductPage: handleProductPage,
          item: productMock
        }}>
          <ProductCard item={productMock} />
        </ProductContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

describe('<ProductCard />', () => {
  it('should call function to send item information to context and redirect to product page when product image is clicked', () => {
    renderProductCard();

    const image = screen.getByAltText(/vinho/i);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/product/0');

    userEvent.click(image);
    expect(handleProductPage).toHaveBeenCalledTimes(1);
    expect(handleProductPage).toHaveBeenCalledWith(productMock);
  });

  it('should call function to send item information to context and redirect to product page when product title is clicked', () => {
    renderProductCard();

    const title = screen.getByRole('heading', { name: /vinho/i });
    userEvent.click(title);
    expect(handleProductPage).toHaveBeenCalledTimes(1);
    expect(handleProductPage).toHaveBeenCalledWith(productMock);
  });

  it('should call function when the add button is clicked, to send the product to cart', () => {
    renderProductCard();

    const button = screen.getByRole('button', { name: /adicionar/i });
    userEvent.click(button);
    expect(handleCheckItemInCart).toHaveBeenCalledTimes(1);
    expect(handleCheckItemInCart).toHaveBeenCalledWith(itemMock);
  });
});