import { screen } from '@testing-library/react';
import { CartHeaderSearch } from '.';
import contextRender from 'mocks/contextRender';

describe('<CartSearchHeader />', () => {
  const handleSearch = jest.fn();
  const handleCart = jest.fn();
  const handleHamburger = jest.fn();

  it('should render header and hide search box, cart and hamburger menu if closed', () => {
    const { catalogAndCart } = contextRender({});
    catalogAndCart(<CartHeaderSearch searchClick={false} cartClick={false} hamburgerClick={false} handleSearchClick={handleSearch} handleCartClick={handleCart} handleHamburgerClick={handleHamburger} />);

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByTestId('wineBoxButton')).toBeInTheDocument();

    const search = screen.getByPlaceholderText('Pesquisar');
    expect(search).toBeInTheDocument();
    expect(search).not.toBeVisible();

    const cart = screen.getByAltText('Fechar WineBox');
    expect(cart).toBeInTheDocument();
    expect(cart).not.toBeVisible();

    const hamburger = screen.getByAltText('Entrar');
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).not.toBeVisible();
  });

  it('should hide cart and hamburger menu if search box is open', () => {
    const { catalogAndCart } = contextRender({});
    catalogAndCart(<CartHeaderSearch searchClick={true} cartClick={false} hamburgerClick={false} handleSearchClick={handleSearch} handleCartClick={handleCart} handleHamburgerClick={handleHamburger} />);

    const search = screen.getByPlaceholderText('Pesquisar');
    expect(search).toBeInTheDocument();
    expect(search).toBeVisible();

    const cart = screen.getByAltText('Fechar WineBox');
    expect(cart).toBeInTheDocument();
    expect(cart).not.toBeVisible();

    const hamburger = screen.getByAltText('Entrar');
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).not.toBeVisible();
  });

  it('should hide search box and hamburger menu if cart is open', () => {
    const { catalogAndCart } = contextRender({});
    catalogAndCart(<CartHeaderSearch searchClick={false} cartClick={true} hamburgerClick={false} handleSearchClick={handleSearch} handleCartClick={handleCart} handleHamburgerClick={handleHamburger} />);

    const search = screen.getByPlaceholderText('Pesquisar');
    expect(search).toBeInTheDocument();
    expect(search).not.toBeVisible();

    const cart = screen.getByAltText('Fechar WineBox');
    expect(cart).toBeInTheDocument();
    expect(cart).toBeVisible();

    const hamburger = screen.getByAltText('Entrar');
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).not.toBeVisible();
  });

  it('should hide search box and cart if hamburger menu is open', () => {
    const { catalogAndCart } = contextRender({});
    catalogAndCart(<CartHeaderSearch searchClick={false} cartClick={false} hamburgerClick={true} handleSearchClick={handleSearch} handleCartClick={handleCart} handleHamburgerClick={handleHamburger} />);

    const search = screen.getByPlaceholderText('Pesquisar');
    expect(search).toBeInTheDocument();
    expect(search).not.toBeVisible();

    const cart = screen.getByAltText('Fechar WineBox');
    expect(cart).toBeInTheDocument();
    expect(cart).not.toBeVisible();

    const hamburger = screen.getByAltText('Entrar');
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).toBeVisible();
  });
});