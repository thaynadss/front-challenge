import { render, RenderResult, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CatalogPage from '.';
import { productMock } from '../../components/ProductCard/productMock';
import { CartContext } from '../../contexts/CartContext';
import { CatalogContext } from '../../contexts/CatalogContext';
import { Action } from '../../contexts/CatalogContext/reducer';
import { ProductContext } from '../../contexts/ProductContext';

const catalogState = {
  filter: '',
  search: '',
};
const catalogDispatch = jest.fn() as React.Dispatch<Action>;
const handleProductPage = jest.fn();

const cartState = { cart: [] };
const handleCheckItemInCart = jest.fn();
const handleIncreaseQuantity = jest.fn();
const handleInputQuantity = jest.fn();
const handleDecreaseQuantity = jest.fn();
const handleRemoveFromCart = jest.fn();

const renderCatalogPage = (): RenderResult => {
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
          <CatalogContext.Provider value={{
            catalogState: catalogState,
            catalogDispatch: catalogDispatch
          }}>
            <CatalogPage />
          </CatalogContext.Provider>
        </ProductContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>);
};

describe('<CatalogPage />', () => {
  describe('Screen above 1200px', () => {
    beforeEach(() => {
      global.innerWidth = 1200
      global.dispatchEvent(new Event('resize'))
    });

    it('should do something', () => {
      renderCatalogPage();

      expect(screen.queryByAltText('Menu')).not.toBeInTheDocument();
    });
  });
});