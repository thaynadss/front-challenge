import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { productMock } from './productMock';
import { CartContext } from 'presentation/contexts/CartContext';
import { CatalogContext } from 'presentation/contexts/CatalogContext';
import { ProductContext } from 'presentation/contexts/ProductContext';
import { Action, State } from 'presentation/contexts/CatalogContext/reducer';
import { CartItem } from 'types/Product';

type Props = {
  catalogSt?: State;
  cartSt?: { cart: CartItem[] };
};

function contextRender({ catalogSt, cartSt }: Props) {
  const catalogState = {
    filter: '',
    search: '',
  };

  const catalogDispatch = jest.fn() as React.Dispatch<Action>;
  const cartState = { cart: [] };
  const [handleProductPage, handleCheckItemInCart, handleIncreaseQuantity, handleInputQuantity, handleDecreaseQuantity, handleRemoveFromCart] = new Array(6).fill(jest.fn());

  function renderInBrowserRouter(children: React.ReactNode): RenderResult {
    return render(
      <BrowserRouter>{children}</BrowserRouter>
    )
  };

  function catalogContextMock(children: React.ReactNode) {
    return (
      <CatalogContext.Provider value={{
        catalogState: catalogSt || catalogState,
        catalogDispatch
      }}>
        {children}
      </CatalogContext.Provider>
    )
  };

  function cartContextMock(children: React.ReactNode) {
    return (
      <CartContext.Provider value={{
        cartState: cartSt || cartState,
        handleCheckItemInCart,
        handleIncreaseQuantity,
        handleInputQuantity,
        handleDecreaseQuantity,
        handleRemoveFromCart
      }}>
        {children}
      </CartContext.Provider>
    )
  };

  function productContextMock(children: React.ReactNode) {
    return (
      <ProductContext.Provider value={{
        handleProductPage,
        item: productMock
      }}>
        {children}
      </ProductContext.Provider>
    )
  };

  function catalog(children: React.ReactNode) {
    return (
      renderInBrowserRouter(catalogContextMock(children))
    )
  };

  function cart(children: React.ReactNode) {
    return (
      renderInBrowserRouter(cartContextMock(children))
    )
  };

  function product(children: React.ReactNode) {
    return (
      renderInBrowserRouter(productContextMock(children))
    )
  };

  function catalogAndCart(children: React.ReactNode) {
    return (
      renderInBrowserRouter(catalogContextMock(cartContextMock(children)))
    )
  };

  function catalogAndProduct(children: React.ReactNode) {
    return (
      renderInBrowserRouter(catalogContextMock(productContextMock(children)))
    )
  };

  function cartAndProduct(children: React.ReactNode) {
    return (
      renderInBrowserRouter(cartContextMock(productContextMock(children)))
    )
  };

  function catalogAndCartAndProduct(children: React.ReactNode) {
    return (
      renderInBrowserRouter(catalogContextMock(cartContextMock(productContextMock(children))))
    )
  };

  return {
    catalog,
    cart,
    product,
    catalogAndCart,
    catalogAndProduct,
    cartAndProduct,
    catalogAndCartAndProduct,
    catalogDispatch,
    handleCheckItemInCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleInputQuantity,
    handleProductPage,
    handleRemoveFromCart,
  }
};

export default contextRender;