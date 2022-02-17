import { render, RenderResult, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductsDisplay } from '.';
import { CatalogContext } from '../../contexts/CatalogContext';
import { Action } from '../../contexts/CatalogContext/reducer';

const catalogState = {
  filter: '',
  search: '',
};
const catalogDispatch = jest.fn() as React.Dispatch<Action>;

const renderProductsDisplay = (): RenderResult => {
  return render(
    <BrowserRouter>
      <CatalogContext.Provider value={{
        catalogState: catalogState,
        catalogDispatch: catalogDispatch
      }}>
        <ProductsDisplay />
      </CatalogContext.Provider>
    </BrowserRouter>
  );
};

describe('<ProductsDisplay />', () => {
  it('should render a text and a gif while the products are not loaded', () => {
    renderProductsDisplay();

    const gif = screen.getByAltText(/carregando/i);
    const loadingTitle = screen.getByRole('heading', { name: /carregando/i });

    expect(loadingTitle).toBeInTheDocument();
    expect(gif).toBeInTheDocument();
  });

  it('should render the quantity of items that were found and the products cards', async () => {
    renderProductsDisplay();

    const quantityProducts = await screen.findByRole('heading', { name: /produtos encontrados/i });

    await waitFor(() => expect(quantityProducts).toBeInTheDocument());
  });
});