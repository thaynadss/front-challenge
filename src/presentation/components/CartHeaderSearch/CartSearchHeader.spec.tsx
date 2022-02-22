import { screen } from '@testing-library/react';
import { CartHeaderSearch } from '.';
import contextRender from 'presentation/tests/contextRender';

describe('<CartSearchHeader />', () => {
  const handleSearch = jest.fn();
  const handleCart = jest.fn();
  const handleHamburger = jest.fn();
  const { catalogAndCart } = contextRender({});

  it('should render header and hide search box, cart and hamburger menu if closed', () => {
    catalogAndCart(<CartHeaderSearch searchClick={false} cartClick={false} hamburgerClick={false} handleSearchClick={handleSearch} handleCartClick={handleCart} handleHamburgerClick={handleHamburger} />);

    const headerLogo = screen.getByAltText('Logo');
    const wineBoxButton = screen.getByTestId('wineBoxButton');
    const search = screen.getByPlaceholderText('Pesquisar');
    const cart = screen.getByAltText('Fechar WineBox');
    const hamburger = screen.getByAltText('Entrar');


    expect(headerLogo).toBeInTheDocument();
    expect(wineBoxButton).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(search).not.toBeVisible();
    expect(cart).toBeInTheDocument();
    expect(cart).not.toBeVisible();
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).not.toBeVisible();
  });

  it('should hide cart and hamburger menu if search box is open', () => {
    catalogAndCart(<CartHeaderSearch searchClick={true} cartClick={false} hamburgerClick={false} handleSearchClick={handleSearch} handleCartClick={handleCart} handleHamburgerClick={handleHamburger} />);

    const search = screen.getByPlaceholderText('Pesquisar');
    const cart = screen.getByAltText('Fechar WineBox');
    const hamburger = screen.getByAltText('Entrar');

    expect(search).toBeInTheDocument();
    expect(search).toBeVisible();
    expect(cart).toBeInTheDocument();
    expect(cart).not.toBeVisible();
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).not.toBeVisible();
  });

  it('should hide search box and hamburger menu if cart is open', () => {
    catalogAndCart(<CartHeaderSearch searchClick={false} cartClick={true} hamburgerClick={false} handleSearchClick={handleSearch} handleCartClick={handleCart} handleHamburgerClick={handleHamburger} />);

    const search = screen.getByPlaceholderText('Pesquisar');
    const cart = screen.getByAltText('Fechar WineBox');
    const hamburger = screen.getByAltText('Entrar');

    expect(search).toBeInTheDocument();
    expect(search).not.toBeVisible();
    expect(cart).toBeInTheDocument();
    expect(cart).toBeVisible();
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).not.toBeVisible();
  });

  it('should hide search box and cart if hamburger menu is open', () => {
    catalogAndCart(<CartHeaderSearch searchClick={false} cartClick={false} hamburgerClick={true} handleSearchClick={handleSearch} handleCartClick={handleCart} handleHamburgerClick={handleHamburger} />);

    const search = screen.getByPlaceholderText('Pesquisar');
    const cart = screen.getByAltText('Fechar WineBox');
    const hamburger = screen.getByAltText('Entrar');

    expect(search).toBeInTheDocument();
    expect(search).not.toBeVisible();
    expect(cart).toBeInTheDocument();
    expect(cart).not.toBeVisible();
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).toBeVisible();
  });
});