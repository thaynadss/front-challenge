import { render, RenderResult } from '@testing-library/react';
import { ProductDescription } from '.';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import { productMock } from '../ProductCard/productMock';

const handleProductPage = jest.fn();
const cartState = { cart: [] };
const handleCheckItemInCart = jest.fn();
const handleIncreaseQuantity = jest.fn();
const handleInputQuantity = jest.fn();
const handleDecreaseQuantity = jest.fn();
const handleRemoveFromCart = jest.fn();

const renderProductDescription = (): RenderResult => {
  return render(
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
        <ProductDescription />
      </ProductContext.Provider>
    </CartContext.Provider>
  );
};

describe('<ProductsDescription />', () => {
  it('should do something', () => {
    renderProductDescription()
  })
})