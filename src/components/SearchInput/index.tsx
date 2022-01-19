import { KeyboardEvent, useState } from 'react';
import * as C from './styles';

type Props = {
  search: boolean;
}

export const SearchInput = ({ search }: Props) => {
  const [searchedText, setSearchedText] = useState<string>('');

  //(e: KeyboardEvent | MouseEvent)
  const handleKeyboardSearch = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && searchedText !== null) {
      // chamar função externa
      setSearchedText('');
    }
  }

  const handleClickSearch = () => {
    if (searchedText !== null) {
      // chamar função externa
      setSearchedText('');
    }
  }

  return (
    <C.ScreenContainer search={search}>
      <C.SearchForm method='GET'>
        <C.SearchLabel>
          <C.SearchInput
            type='text'
            value={searchedText}
            placeholder='Pesquisar'
            onChange={e => setSearchedText(e.target.value)}
            onKeyUp={handleKeyboardSearch}
          />
          <span>aperte enter para buscar</span>
          <C.SubmitButton
            type='submit'
            onClick={handleClickSearch}
          >
            <img src={process.env.PUBLIC_URL + '/icons/searchSmaller.svg'} alt='Botão de busca' /></C.SubmitButton>
        </C.SearchLabel>
      </C.SearchForm>
    </C.ScreenContainer>
  )
}