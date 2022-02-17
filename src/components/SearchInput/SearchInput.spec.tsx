import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
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
const catalogDispatch = jest.fn() as React.Dispatch<Action>;
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
  it('should search the products by the text typed in the input when the keyboard enter key is pressed and should redirect to the home page', () => {
    renderSearchInput();

    const input = screen.getByPlaceholderText(/pesquisar/i);

    userEvent.type(input, 'vinho');
    keyboard('{Enter}')

    expect(catalogDispatch).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/home');
    expect(handleSearchClick).toHaveBeenCalledWith(false);
  });

  it('should not do anything if there is no text in the input when the search button is clicked', () => {
    renderSearchInput();

    const button = screen.getByAltText('Botão de busca');

    userEvent.click(button);

    expect(catalogDispatch).not.toHaveBeenCalled();
  });

  it('should search the products by the text typed in the input when the search button is clicked and should redirect to the home page', () => {
    renderSearchInput();

    const input = screen.getByPlaceholderText(/pesquisar/i);
    const button = screen.getByAltText('Botão de busca');

    userEvent.type(input, 'vinho');
    userEvent.click(button);

    expect(catalogDispatch).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/home');
    expect(handleSearchClick).toHaveBeenCalledWith(false);
  });

  it('should call function when it is clicked outside the search box container', () => {
    renderSearchInput();

    const screenOutside = screen.getByTestId('screen');
    userEvent.click(screenOutside);
    expect(handleSearchClick).toHaveBeenCalledWith(false);
  });
});