import { render, RenderResult, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ProductsDisplay } from '.';
import { CatalogContext } from '../../contexts/CatalogContext';
import { Action, State } from '../../contexts/CatalogContext/reducer';
import { api, getProducts } from '../../services/api';
import axios from 'axios';
import { apiMock } from '../../services/mock';

const emptyState = {
  filter: '',
  search: '',
};

const fullState = {
  filter: 'vinho',
  search: '',
};

const catalogDispatch = jest.fn() as React.Dispatch<Action>;

const renderProductsDisplay = (state: State): RenderResult => {
  return render(
    <BrowserRouter>
      <CatalogContext.Provider value={{
        catalogState: state,
        catalogDispatch: catalogDispatch
      }}>
        <ProductsDisplay />
      </CatalogContext.Provider>
    </BrowserRouter>
  );
};

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({})),
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({}))
  }))
}));

const mockedAxios = api as jest.Mocked<typeof axios>;


describe('<ProductsDisplay />', () => {
  describe('Render with empty state', () => {
    beforeEach(async () => {
      mockedAxios.get.mockResolvedValue({ data: apiMock });
      const result = await getProducts(emptyState);
      return result;
    });

    afterEach(() => {
      jest.clearAllMocks()
    });

    it('should render a text and a gif while the products are not loaded', () => {
      renderProductsDisplay(emptyState);

      const gif = screen.getByAltText(/carregando/i);
      const loadingTitle = screen.getByRole('heading', { name: /carregando/i });

      expect(loadingTitle).toBeInTheDocument();
      expect(gif).toBeInTheDocument();
    });

    it('should not render a text and a gif if the api request completes', async () => {
      renderProductsDisplay(emptyState);

      await waitForElementToBeRemoved(() =>
        screen.queryByAltText(/carregando/i)
      );

      await waitForElementToBeRemoved(() =>
        screen.queryByRole('heading', { name: /carregando/i })
      );
    });

    it('should render the quantity of items that were found and the products cards', async () => {
      renderProductsDisplay(emptyState);

      const quantityProducts = await screen.findByRole('heading', { name: /produtos encontrados/i });

      expect(quantityProducts).toBeInTheDocument();

      const cards = await screen.findAllByRole('heading', { name: /não sócio/i });

      expect(cards[0]).toBeInTheDocument();
    });

    it('should not render clear search button if there are no searched products', async () => {
      renderProductsDisplay(emptyState);

      await waitFor(() =>
        expect(screen.queryByRole('button', { name: /limpar pesquisa/i })).not.toBeInTheDocument()
      );
    });
  });

  describe('Render with full state', () => {
    beforeEach(async () => {
      mockedAxios.get.mockResolvedValue({ data: apiMock });
      const result = await getProducts(fullState);
      return result;
    });

    afterEach(() => {
      jest.clearAllMocks()
    });

    it('should render clear search button if there are searched products and should call function to do that', async () => {
      renderProductsDisplay(fullState);

      const searchButton = await screen.findByRole('button', { name: 'Limpar pesquisa' });

      await waitFor(() => expect(searchButton).toBeInTheDocument());
      userEvent.click(searchButton);
      expect(catalogDispatch).toHaveBeenCalledTimes(1);
    });

  });
});