import { screen } from '@testing-library/react';
import { ProductCard } from '.';
import { productMock, itemMock } from 'mocks/productMock';
import userEvent from '@testing-library/user-event';
import contextRender from 'mocks/contextRender';

describe('<ProductCard />', () => {
  it('should call function to send item information to context and redirect to product page when product image is clicked', () => {
    const { cartAndProduct, handleProductPage } = contextRender({});
    cartAndProduct(<ProductCard item={productMock} />);

    const image = screen.getByAltText(/vinho/i);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/product/0');

    userEvent.click(image);
    expect(handleProductPage).toHaveBeenCalledTimes(1);
    expect(handleProductPage).toHaveBeenCalledWith(productMock);
  });

  it('should call function to send item information to context and redirect to product page when product title is clicked', () => {
    const { cartAndProduct, handleProductPage } = contextRender({});
    cartAndProduct(<ProductCard item={productMock} />);

    const title = screen.getByRole('heading', { name: /vinho/i });
    userEvent.click(title);
    expect(handleProductPage).toHaveBeenCalledTimes(1);
    expect(handleProductPage).toHaveBeenCalledWith(productMock);
  });

  it('should call function when the add button is clicked, to send the product to cart', () => {
    const { cartAndProduct, handleCheckItemInCart } = contextRender({});
    cartAndProduct(<ProductCard item={productMock} />);

    const button = screen.getByRole('button', { name: /adicionar/i });
    userEvent.click(button);
    expect(handleCheckItemInCart).toHaveBeenCalledTimes(1);
    expect(handleCheckItemInCart).toHaveBeenCalledWith(itemMock);
  });
});