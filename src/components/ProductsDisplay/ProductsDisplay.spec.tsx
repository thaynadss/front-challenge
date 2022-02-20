import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import contextRender from '../../helpers/contextRender';
import { ProductsDisplay } from '.';
import { api } from '../../services/api';
import { apiMock } from '../../services/mock';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({})),
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({}))
  }))
}));

afterEach(() => {
  jest.clearAllMocks()
});

describe('<ProductsDisplay />', () => {
  const mockedAxios = api as jest.Mocked<typeof axios>;

  beforeEach(() => mockedAxios.get.mockResolvedValue({ data: apiMock }));

  describe('Render with empty state', () => {
    it('should render a text and a gif while the products are not loaded', () => {
      const { catalog } = contextRender({});
      catalog(<ProductsDisplay />)

      const gif = screen.getByAltText(/carregando/i);
      const loadingTitle = screen.getByRole('heading', { name: /carregando/i });

      expect(loadingTitle).toBeInTheDocument();
      expect(gif).toBeInTheDocument();
    });

    it('should not render a text and a gif if the api request completes', async () => {
      const { catalog } = contextRender({});
      catalog(<ProductsDisplay />)

      await waitFor(() =>
        expect(screen.queryByAltText(/carregando/i)).not.toBeInTheDocument()
      );

      await waitFor(() =>
        expect(screen.queryByRole('heading', { name: /carregando/i })).not.toBeInTheDocument()
      );
    });

    it('should render the quantity of items that were found and the products cards', async () => {
      const { catalog } = contextRender({});
      catalog(<ProductsDisplay />)

      const quantityProducts = await screen.findByRole('heading', { name: /produtos encontrados/i });

      expect(quantityProducts).toBeInTheDocument();

      const cards = await screen.findAllByRole('heading', { name: /não sócio/i });

      expect(cards[0]).toBeInTheDocument();
    });

    it('should not render clear search button if there are no searched products', async () => {
      const { catalog } = contextRender({});
      catalog(<ProductsDisplay />)

      await waitFor(() =>
        expect(screen.queryByRole('button', { name: /limpar pesquisa/i })).not.toBeInTheDocument()
      );
    });
  });

  describe('Render with full state', () => {
    it('should render clear search button if there are searched products and should call function to do that', async () => {
      const { catalog, catalogDispatch } = contextRender({
        catalogSt: {
          filter: '',
          search: 'vinho',
        }
      });
      catalog(<ProductsDisplay />)

      const searchButton = await screen.findByRole('button', { name: 'Limpar pesquisa' });

      await waitFor(() => expect(searchButton).toBeInTheDocument());
      userEvent.click(searchButton);
      expect(catalogDispatch).toHaveBeenCalledTimes(1);
    });
  });
});