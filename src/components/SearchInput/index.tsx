import { KeyboardEvent, useContext, useState } from 'react';
import { CatalogContext } from '../../contexts/CatalogContext';
import * as C from './styles';

type Props = {
  search: boolean;
  handleSearch: () => void;
}

export const SearchInput = ({ search, handleSearch }: Props) => {
  const [searchedText, setSearchedText] = useState<string>('');
  const { catalogDispatch } = useContext(CatalogContext);

  const handleClickSearch = () => {
    if (searchedText !== '') {
      catalogDispatch({
        type: 'SEARCHED_TEXT',
        payload: `name=${searchedText.trim()}`
      })
      handleSearch();
      setSearchedText('');
    }
  }

  const handleKeyboardSearch = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleClickSearch()
    }
  }

  return (
    <C.ScreenContainer search={search}>
      <C.SearchForm>
        <C.SearchLabel>
          <C.SearchInput
            type='text'
            value={searchedText}
            placeholder='Pesquisar'
            onChange={e => setSearchedText(e.target.value)}
            onKeyUp={handleKeyboardSearch}
          />
          <span>aperte enter para buscar</span>
          <C.SubmitButton onClick={handleClickSearch} >
            <img src={process.env.PUBLIC_URL + '/icons/smallPinkSearch.svg'} alt='Botão de busca' /></C.SubmitButton>
        </C.SearchLabel>
      </C.SearchForm>
    </C.ScreenContainer>
  )
}