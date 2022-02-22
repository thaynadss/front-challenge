import { screen } from '@testing-library/react';
import contextRender from 'presentation/tests/contextRender';
import CatalogPage from '.';

describe('<CatalogPage />', () => {
  const { catalogAndCartAndProduct } = contextRender({});

  it('should render header, filter and products display', () => {
    catalogAndCartAndProduct(<CatalogPage />);

    const header = screen.getByAltText('Logo');
    const filter = screen.getByRole('heading', { name: /refine sua busca/i });
    const productsDisplay = screen.getByRole('heading', { name: /carregando/i });

    expect(header).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
    expect(productsDisplay).toBeInTheDocument();
  });
});