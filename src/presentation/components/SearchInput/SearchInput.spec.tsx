import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import contextRender from 'presentation/tests/contextRender';
import { SearchInput } from '.';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('<SearchInput />', () => {
  const handleIsisSearchClick = jest.fn();
  const { catalog, catalogDispatch } = contextRender({});

  it('should search the products by the text typed in the input when the keyboard enter key is pressed and should redirect to the home page', () => {
    catalog(<SearchInput isSearchClick={true} handleIsSearchClick={handleIsisSearchClick} />);

    const input = screen.getByPlaceholderText(/pesquisar/i);

    userEvent.type(input, 'vinho');
    keyboard('{Enter}')

    expect(catalogDispatch).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/home');
    expect(handleIsisSearchClick).toHaveBeenCalledWith(false);
  });

  it('should not do anything if there is no text in the input when the search button is clicked', () => {
    catalog(<SearchInput isSearchClick={true} handleIsSearchClick={handleIsisSearchClick} />);

    const button = screen.getByAltText('Botão de busca');

    userEvent.click(button);

    expect(catalogDispatch).not.toHaveBeenCalled();
  });

  it('should search the products by the text typed in the input when the search button is clicked and should redirect to the home page', () => {
    catalog(<SearchInput isSearchClick={true} handleIsSearchClick={handleIsisSearchClick} />);

    const input = screen.getByPlaceholderText(/pesquisar/i);
    const button = screen.getByAltText('Botão de busca');

    userEvent.type(input, 'vinho');
    userEvent.click(button);

    expect(catalogDispatch).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/home');
    expect(handleIsisSearchClick).toHaveBeenCalledWith(false);
  });

  it('should call function when it is clicked outside the search box container', () => {
    catalog(<SearchInput isSearchClick={true} handleIsSearchClick={handleIsisSearchClick} />);

    const screenOutside = screen.getByTestId('screen');

    userEvent.click(screenOutside);

    expect(handleIsisSearchClick).toHaveBeenCalledWith(false);
  });
});