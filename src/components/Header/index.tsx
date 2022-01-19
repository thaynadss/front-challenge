import { useState } from 'react';
import { HeaderNavigation } from '../HeaderNavigation';
import { SearchInput } from '../SearchInput';
import * as C from './styles';
import { Link } from 'react-router-dom';
import { WineBoxCart } from '../WineBoxCart';

export const Header = () => {
  const [searchClick, setSearchClick] = useState<boolean>(false);
  const [cartClick, setCartClick] = useState<boolean>(false);
  const searchIcon = searchClick ? 'pinkSearch.png' : 'search.svg';

  return (
    <C.HeaderContainer>
      <Link to='/'><C.Logo src={process.env.PUBLIC_URL + '/icons/logo.svg'} alt='Logo' /></Link>
      <HeaderNavigation />
      <C.SearchContainer src={process.env.PUBLIC_URL + `/icons/${searchIcon}`} alt='Pesquisar' onClick={() => setSearchClick(!searchClick)} />
      <C.AccountButton src={process.env.PUBLIC_URL + '/icons/account.svg'} alt='Conta' />
      <C.WineBoxButton onClick={() => setCartClick(!cartClick)}>
        <C.CounterWineBox>0</C.CounterWineBox>
      </C.WineBoxButton>

      <WineBoxCart cartClick={cartClick} setCartClick={setCartClick} />
      <SearchInput search={searchClick} />

    </C.HeaderContainer>
  )
}