import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '.';
import { CartContext } from '../../contexts/CartContext';
import { CatalogContext } from '../../contexts/CatalogContext';
import { Action } from '../../contexts/CatalogContext/reducer';

const catalogState = {
  filter: '',
  search: '',
};
const catalogDispatch = jest.fn() as React.Dispatch<Action>;

const cartState = { cart: [] };
const handleCheckItemInCart = jest.fn();
const handleIncreaseQuantity = jest.fn();
const handleInputQuantity = jest.fn();
const handleDecreaseQuantity = jest.fn();
const handleRemoveFromCart = jest.fn();
const handleHamburguer = jest.fn();
const handleSearch = jest.fn();
const handleCart = jest.fn();

const renderHeader = (): RenderResult => {
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
          <Header searchClick={false} cartClick={false} hamburgerClick={false} handleHamburgerClick={handleHamburguer} handleSearchClick={handleSearch} handleCartClick={handleCart} />
        </CatalogContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>);
};

describe('Header />', () => {
  it('should call function when the menu hamburger icon is clicked, to show it and close the cart and search box, if they are open', () => {
    renderHeader();

    const menuHamburger = screen.getByAltText('Menu');
    userEvent.click(menuHamburger);
    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith(false);
    expect(handleCart).toHaveBeenCalledTimes(1);
    expect(handleCart).toHaveBeenCalledWith(false);
    expect(handleHamburguer).toHaveBeenCalledTimes(1);
    expect(handleHamburguer).toHaveBeenCalledWith(true);
  });

  it('should call function when logo icon is clicked, to redirect to the home page, clear search, clear filter and close the cart, search box and menu hamburger, if they are open', () => {
    renderHeader();

    const logo = screen.getByAltText('Logo');
    userEvent.click(logo);
    expect(catalogDispatch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith(false);
    expect(handleCart).toHaveBeenCalledTimes(1);
    expect(handleCart).toHaveBeenCalledWith(false);
    expect(handleHamburguer).toHaveBeenCalledTimes(1);
    expect(handleHamburguer).toHaveBeenCalledWith(false);
  });

  it('should call function when search icon is clicked, to open/close search box and close the cart and menu hamburger, if they are open', () => {
    renderHeader();

    const search = screen.getAllByAltText('Pesquisar');
    userEvent.click(search[0]);
    userEvent.click(search[1]);
    expect(handleSearch).toHaveBeenCalledTimes(2);
    expect(handleSearch).toHaveBeenCalledWith(true);
    expect(handleCart).toHaveBeenCalledTimes(2);
    expect(handleCart).toHaveBeenCalledWith(false);
    expect(handleHamburguer).toHaveBeenCalledTimes(2);
    expect(handleHamburguer).toHaveBeenCalledWith(false);
  });

  it('should call function when wine box icon is clicked, to open/close cart and close the search box and menu hamburger, if they are open', () => {
    renderHeader();

    const wineBox = screen.getByTestId('wineBoxButton');
    userEvent.click(wineBox);
    const counter = screen.getByText('0');
    userEvent.click(counter);

    expect(handleSearch).toHaveBeenCalledTimes(2);
    expect(handleSearch).toHaveBeenCalledWith(false);
    expect(handleCart).toHaveBeenCalledTimes(2);
    expect(handleCart).toHaveBeenCalledWith(true);
    expect(handleHamburguer).toHaveBeenCalledTimes(2);
    expect(handleHamburguer).toHaveBeenCalledWith(false);
  });
});