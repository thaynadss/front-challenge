import { screen } from '@testing-library/react';
import { ProductCard } from '.';
import { productMock, itemMock } from 'presentation/tests/productMock';
import userEvent from '@testing-library/user-event';
import contextRender from 'presentation/tests/contextRender';

describe('<ProductCard />', () => {
  const { cartAndProduct, handleProductPage, handleCheckItemInCart } = contextRender({});

  it('should call function to send item information to context and redirect to product page when product image is clicked', () => {
    cartAndProduct(<ProductCard item={productMock} />);

    const image = screen.getByAltText(/vinho/i);

    userEvent.click(image);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/product/0');
    expect(handleProductPage).toHaveBeenCalledTimes(1);
    expect(handleProductPage).toHaveBeenCalledWith(productMock);
  });

  it('should call function to send item information to context and redirect to product page when product title is clicked', () => {
    cartAndProduct(<ProductCard item={productMock} />);

    const title = screen.getByRole('heading', { name: /vinho/i });

    userEvent.click(title);

    expect(handleProductPage).toHaveBeenCalledTimes(1);
    expect(handleProductPage).toHaveBeenCalledWith(productMock);
  });

  it('should call function when the add button is clicked, to send the product to cart', () => {
    cartAndProduct(<ProductCard item={productMock} />);

    const button = screen.getByRole('button', { name: /adicionar/i });

    userEvent.click(button);

    expect(handleCheckItemInCart).toHaveBeenCalledTimes(1);
    expect(handleCheckItemInCart).toHaveBeenCalledWith(itemMock);
  });
});