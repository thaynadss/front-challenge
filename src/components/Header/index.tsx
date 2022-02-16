import { useContext } from 'react';
import { HeaderNavigation } from '../HeaderNavigation';
import * as C from './styles';
import { Link } from 'react-router-dom';
import { CatalogContext } from '../../contexts/CatalogContext';
import { CartContext } from '../../contexts/CartContext';
import { HeaderProps } from '../CartHeaderSearch';

export const Header = ({ searchClick, cartClick, hamburgerClick, handleHamburgerClick, handleSearchClick, handleCartClick, }: HeaderProps) => {
  const searchIcon = searchClick ? 'pinkSearch.png' : 'search.svg';
  const { catalogDispatch } = useContext(CatalogContext);
  const { cartState: { cart } } = useContext(CartContext);

  const handleCloseSearchCart = (search: boolean, cart: boolean, hamburger: boolean) => {
    handleSearchClick(search);
    handleCartClick(cart);
    handleHamburgerClick(hamburger);
  };

  const handleHomePage = () => {
    catalogDispatch({
      type: 'SEARCHED_TEXT',
      payload: ''
    });
    handleCloseSearchCart(false, false, false);
  };

  return (
    <C.Header>
      <C.HeaderContainer>
        <C.IconsContainer gap={1.5}>
          <C.HamburguerMenu src={process.env.PUBLIC_URL + '/icons/hamburgerMenu.svg'} alt='Menu' onClick={() => handleCloseSearchCart(false, false, !hamburgerClick)} />
          <Link to='/home'><C.Logo src={process.env.PUBLIC_URL + '/icons/logo.svg'} alt='Logo' onClick={handleHomePage} /></Link>
        </C.IconsContainer>

        <HeaderNavigation />

        <C.IconsContainer gap={0.8}>
          <C.SearchButton src={process.env.PUBLIC_URL + `/icons/${searchIcon}`} alt='Pesquisar' onClick={() => handleCloseSearchCart(!searchClick, false, false)} />
          <C.SmallSearchButton src={process.env.PUBLIC_URL + '/icons/smallSearch.svg'} alt='Pesquisar' onClick={() => handleCloseSearchCart(!searchClick, false, false)} />
          <C.AccountButton src={process.env.PUBLIC_URL + '/icons/account.svg'} alt='Conta' />
          <C.WineBoxButton data-testid='wineBoxButton' onClick={() => handleCloseSearchCart(false, !cartClick, false)}>
            <C.CounterWineBox>{cart.length}</C.CounterWineBox>
          </C.WineBoxButton>
        </C.IconsContainer>
      </C.HeaderContainer>
    </C.Header >
  );
};