import { KeyboardEvent, useContext, useState } from 'react';
import { CatalogContext } from '../../contexts/CatalogContext';
import * as C from './styles';
import { useNavigate } from 'react-router-dom';

type Props = {
  search: boolean;
  handleSearchClick: (close: boolean) => void;
};

export const SearchInput = ({ search, handleSearchClick }: Props) => {
  const [searchedText, setSearchedText] = useState<string>('');
  const { catalogDispatch } = useContext(CatalogContext);
  const navigate = useNavigate();

  const handleClickSearch = () => {
    if (searchedText !== '') {
      catalogDispatch({
        type: 'SEARCHED_TEXT',
        payload: `name=${searchedText.trim()}`
      })
      handleSearchClick(false);
      setSearchedText('');
      navigate(`/home/:${searchedText.trim()}`);
    }
  };

  const handleKeyboardSearch = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleClickSearch()
    }
  };

  return (
    <C.ScreenContainer search={search} >
      <C.SearchForm>
        <C.SearchLabel>
          <C.SearchInput
            type='text'
            value={searchedText}
            placeholder='Pesquisar'
            onChange={e => setSearchedText(e.target.value)}
            onKeyUp={handleKeyboardSearch}
            autoFocus
          />
          <span>aperte enter para buscar</span>
          <C.SubmitButton onClick={handleClickSearch} >
            <img src={process.env.PUBLIC_URL + '/icons/smallPinkSearch.svg'} alt='Botão de busca' /></C.SubmitButton>
        </C.SearchLabel>
      </C.SearchForm>
      <C.PageBackground onClick={() => handleSearchClick(false)} />
    </C.ScreenContainer>
  )
}