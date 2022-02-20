import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { productMock } from '../components/ProductCard/productMock';
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
  const handleProductPage = jest.fn();
  const handleCheckItemInCart = jest.fn();
  const handleIncreaseQuantity = jest.fn();
  const handleInputQuantity = jest.fn();
  const handleDecreaseQuantity = jest.fn();
  const handleRemoveFromCart = jest.fn();

  function catalog(children: React.ReactNode): RenderResult {
    return render(
      <BrowserRouter>
        <CatalogContext.Provider value={{
          catalogState: catalogSt || catalogState,
          catalogDispatch: catalogDispatch
        }}>
          {children}
        </CatalogContext.Provider>
      </BrowserRouter>
    )
  }

  function cart(children: React.ReactNode): RenderResult {
    return render(
      <BrowserRouter>
        <CartContext.Provider value={{
          cartState: cartSt || cartState,
          handleCheckItemInCart: handleCheckItemInCart,
          handleIncreaseQuantity: handleIncreaseQuantity,
          handleInputQuantity: handleInputQuantity,
          handleDecreaseQuantity: handleDecreaseQuantity,
          handleRemoveFromCart: handleRemoveFromCart
        }}>
          {children}
        </CartContext.Provider>
      </BrowserRouter>
    )
  }

  function product(children: React.ReactNode): RenderResult {
    return render(
      <BrowserRouter>
        <ProductContext.Provider value={{
          handleProductPage: handleProductPage,
          item: productMock
        }}>
          {children}
        </ProductContext.Provider>
      </BrowserRouter>)
  }

  function catalogAndCart(children: React.ReactNode): RenderResult {
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
          <CatalogContext.Provider value={{
            catalogState: catalogState,
            catalogDispatch: catalogDispatch
          }}>
            {children}
          </CatalogContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>)
  }

  function catalogAndProduct(children: React.ReactNode): RenderResult {
    return render(
      <BrowserRouter>
        <ProductContext.Provider value={{
          handleProductPage: handleProductPage,
          item: productMock
        }}>
          <CatalogContext.Provider value={{
            catalogState: catalogState,
            catalogDispatch: catalogDispatch
          }}>
            {children}
          </CatalogContext.Provider>
        </ProductContext.Provider>
      </BrowserRouter>)
  }

  function cartAndProduct(children: React.ReactNode): RenderResult {
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
            {children}
          </ProductContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>)
  }

  function catalogAndCartAndProduct(children: React.ReactNode): RenderResult {
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
              {children}
            </CatalogContext.Provider>
          </ProductContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>)
  }

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
}

export default contextRender;