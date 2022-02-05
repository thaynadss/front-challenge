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
        <C.IconsContainer gap={1.5}>
          <C.HamburguerMenu src={process.env.PUBLIC_URL + '/icons/menuHamburguer.svg'} alt='Menu' />
          <Link to='/'><C.Logo src={process.env.PUBLIC_URL + '/icons/logo.svg'} alt='Logo' onClick={handleHomePage} /></Link>
        </C.IconsContainer>

        <HeaderNavigation />

        <C.IconsContainer gap={0.8}>
          <C.SearchButton src={process.env.PUBLIC_URL + `/icons/${searchIcon}`} alt='Pesquisar' onClick={() => setSearchClick(!searchClick)} />
          <C.SmallSearchButton src={process.env.PUBLIC_URL + '/icons/smallSearch.svg'} alt='Pesquisar' onClick={() => setSearchClick(!searchClick)} />
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