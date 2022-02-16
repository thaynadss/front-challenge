import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductsDisplay } from '.';
import { CatalogContext } from '../../contexts/CatalogContext';
import { Action } from '../../contexts/CatalogContext/reducer';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

afterEach(() => {
  jest.clearAllMocks();
});

const catalogState = {
  filter: '',
  search: '',
};
const catalogDispatch = jest.fn as React.Dispatch<Action>;

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
  it('should do something', () => {
    renderProductsDisplay();
  })
})