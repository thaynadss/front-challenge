import { useContext, useState } from 'react';
import { HeaderNavigation } from '../HeaderNavigation';
import { SearchInput } from '../SearchInput';
import * as C from './styles';
import { Link } from 'react-router-dom';
import { WineBoxCart } from '../WineBoxCart';
import { CatalogContext } from '../../contexts/CatalogContext';
import { CartContext } from '../../contexts/CartContext';

export const Header = () => {
  const [searchClick, setSearchClick] = useState<boolean>(false);
  const [cartClick, setCartClick] = useState<boolean>(false);
  const searchIcon = searchClick ? 'pinkSearch.png' : 'search.svg';
  const { catalogDispatch } = useContext(CatalogContext);
  const { cartState: { cart } } = useContext(CartContext);

  const handleHomePage = () => {
    catalogDispatch({
      type: 'SEARCHED_TEXT',
      payload: ''
    })
  }

  const handleSearchClick = () => {
    setSearchClick(!searchClick);
  }

  const handleCartClick = () => {
    setCartClick(!cartClick);
  }

  return (
    <C.Header>
      <C.HeaderContainer>
        <Link to='/'><C.Logo src={process.env.PUBLIC_URL + '/icons/logo.svg'} alt='Logo' onClick={handleHomePage} /></Link>
        <HeaderNavigation />

        <C.IconsContainer>
          <C.SearchContainer src={process.env.PUBLIC_URL + `/icons/${searchIcon}`} alt='Pesquisar' onClick={() => setSearchClick(!searchClick)} />
          <C.AccountButton src={process.env.PUBLIC_URL + '/icons/account.svg'} alt='Conta' />
          <C.WineBoxButton onClick={() => setCartClick(!cartClick)}>
            <C.CounterWineBox>{cart.length}</C.CounterWineBox>
          </C.WineBoxButton>
        </C.IconsContainer>

        <WineBoxCart cartClick={cartClick} handleCart={handleCartClick} />
        <SearchInput search={searchClick} handleSearch={handleSearchClick} />
      </C.HeaderContainer>
    </C.Header>
  )
}