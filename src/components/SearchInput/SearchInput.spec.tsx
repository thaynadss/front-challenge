import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchInput } from '.';
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
const handleSearchClick = jest.fn();

const renderSearchInput = (): RenderResult => {
  return render(
    <BrowserRouter>
      <CatalogContext.Provider value={{
        catalogState: catalogState,
        catalogDispatch: catalogDispatch
      }}>
        <SearchInput search={true} handleSearchClick={handleSearchClick} />
      </CatalogContext.Provider>
    </BrowserRouter>
  );
};

describe('<SearchInput />', () => {
  it('should do something', () => {
    renderSearchInput();
  })
})