import { screen } from '@testing-library/react';
import { CartHeaderSearch } from '.';
import contextRender from '../../helpers/contextRender';

describe('<CartSearchHeader />', () => {
  const handleSearch = jest.fn();
  const handleCart = jest.fn();
  const handleHamburger = jest.fn();

  it('should', () => {
    const { catalogAndCart } = contextRender({});
    catalogAndCart(<CartHeaderSearch searchClick={false} cartClick={false} hamburgerClick={false} handleSearchClick={handleSearch} handleCartClick={handleCart} handleHamburgerClick={handleHamburger} />);

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByTestId('wineBoxButton')).toBeInTheDocument();

    const search = screen.getByPlaceholderText('Pesquisar');
    expect(search).toBeInTheDocument();
    expect(search).toHaveStyle('display: none');
  });
});