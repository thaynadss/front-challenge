import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '.';
import contextRender from 'mocks/contextRender';

describe('Header />', () => {
  const handleHamburger = jest.fn();
  const handleSearch = jest.fn();
  const handleCart = jest.fn();

  it('should call function when the menu hamburger icon is clicked, to show it and close the cart and search box, if they are open', () => {
    const { catalogAndCart } = contextRender({});
    catalogAndCart(<Header searchClick={false} cartClick={false} hamburgerClick={false} handleHamburgerClick={handleHamburger} handleSearchClick={handleSearch} handleCartClick={handleCart} />);

    const menuHamburger = screen.getByAltText('Menu');
    userEvent.click(menuHamburger);
    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith(false);
    expect(handleCart).toHaveBeenCalledTimes(1);
    expect(handleCart).toHaveBeenCalledWith(false);
    expect(handleHamburger).toHaveBeenCalledTimes(1);
    expect(handleHamburger).toHaveBeenCalledWith(true);
  });

  it('should call function when logo icon is clicked, to redirect to the home page, clear search, clear filter and close the cart, search box and menu hamburger, if they are open', () => {
    const { catalogAndCart, catalogDispatch } = contextRender({});
    catalogAndCart(<Header searchClick={false} cartClick={false} hamburgerClick={false} handleHamburgerClick={handleHamburger} handleSearchClick={handleSearch} handleCartClick={handleCart} />);

    const logo = screen.getByAltText('Logo');
    userEvent.click(logo);
    expect(catalogDispatch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith(false);
    expect(handleCart).toHaveBeenCalledTimes(1);
    expect(handleCart).toHaveBeenCalledWith(false);
    expect(handleHamburger).toHaveBeenCalledTimes(1);
    expect(handleHamburger).toHaveBeenCalledWith(false);
  });

  it('should call function when search icon is clicked, to open/close search box and close the cart and menu hamburger, if they are open', () => {
    const { catalogAndCart } = contextRender({});
    catalogAndCart(<Header searchClick={false} cartClick={false} hamburgerClick={false} handleHamburgerClick={handleHamburger} handleSearchClick={handleSearch} handleCartClick={handleCart} />);

    const search = screen.getAllByAltText('Pesquisar');
    userEvent.click(search[0]);
    userEvent.click(search[1]);
    expect(handleSearch).toHaveBeenCalledTimes(2);
    expect(handleSearch).toHaveBeenCalledWith(true);
    expect(handleCart).toHaveBeenCalledTimes(2);
    expect(handleCart).toHaveBeenCalledWith(false);
    expect(handleHamburger).toHaveBeenCalledTimes(2);
    expect(handleHamburger).toHaveBeenCalledWith(false);
  });

  it('should call function when wine box icon is clicked, to open/close cart and close the search box and menu hamburger, if they are open', () => {
    const { catalogAndCart } = contextRender({});
    catalogAndCart(<Header searchClick={false} cartClick={false} hamburgerClick={false} handleHamburgerClick={handleHamburger} handleSearchClick={handleSearch} handleCartClick={handleCart} />);

    const wineBox = screen.getByTestId('wineBoxButton');
    userEvent.click(wineBox);
    const counter = screen.getByText('0');
    userEvent.click(counter);

    expect(handleSearch).toHaveBeenCalledTimes(2);
    expect(handleSearch).toHaveBeenCalledWith(false);
    expect(handleCart).toHaveBeenCalledTimes(2);
    expect(handleCart).toHaveBeenCalledWith(true);
    expect(handleHamburger).toHaveBeenCalledTimes(2);
    expect(handleHamburger).toHaveBeenCalledWith(false);
  });
});