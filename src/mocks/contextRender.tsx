import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { productMock } from './productMock';
import { CartContext } from '../contexts/CartContext';
import { CatalogContext } from '../contexts/CatalogContext';
import { Action, State } from '../contexts/CatalogContext/reducer';
import { ProductContext } from '../contexts/ProductContext';
import { CartItem } from '../types/Product';

type Props = {
  catalogSt?: State;
  cartSt?: { cart: CartItem[] };
}

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
  }

  function catalog(children: React.ReactNode) {
    return (
      <CatalogContext.Provider value={{
        catalogState: catalogSt || catalogState,
        catalogDispatch
      }}>
        {children}
      </CatalogContext.Provider>
    )
  }

  function cart(children: React.ReactNode) {
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
  }

  function product(children: React.ReactNode) {
    return (
      <ProductContext.Provider value={{
        handleProductPage,
        item: productMock
      }}>
        {children}
      </ProductContext.Provider>
    )
  }

  function catalogAndCart(children: React.ReactNode) {
    return (
      renderInBrowserRouter(catalog(cart(children)))
    )
  }

  function catalogAndProduct(children: React.ReactNode) {
    return (
      renderInBrowserRouter(catalog(product(children)))
    )
  }

  function cartAndProduct(children: React.ReactNode) {
    return (
      renderInBrowserRouter(cart(product(children)))
    )
  }

  function catalogAndCartAndProduct(children: React.ReactNode) {
    return (
      renderInBrowserRouter(catalog(cart(product(children))))
    )
  }

  return {
    renderInBrowserRouter,
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
}

export default contextRender;