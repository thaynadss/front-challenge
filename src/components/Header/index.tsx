import { useContext } from 'react';
import { HeaderNavigation } from '../HeaderNavigation';
import * as C from './styles';
import { Link } from 'react-router-dom';
import { CatalogContext } from '../../contexts/CatalogContext';
import { CartContext } from '../../contexts/CartContext';

type Props = {
  searchClick: boolean;
  cartClick: boolean;
  handleSearchClick: (close: boolean) => void;
  handleCartClick: (close: boolean) => void;
}

export const Header = ({ searchClick, cartClick, handleSearchClick, handleCartClick }: Props) => {
  const searchIcon = searchClick ? 'pinkSearch.png' : 'search.svg';
  const { catalogDispatch } = useContext(CatalogContext);
  const { cartState: { cart } } = useContext(CartContext);

  const handleHomePage = () => {
    catalogDispatch({
      type: 'SEARCHED_TEXT',
      payload: ''
    })
  };

  const handleCloseSearchCart = (search: boolean, cart: boolean) => {
    handleSearchClick(search);
    handleCartClick(cart);
  }

  const handleClearSelec = () => {
    handleHomePage();
    handleCloseSearchCart(false, false);
  }

  return (
    <C.Header>
      <C.HeaderContainer>
        <C.IconsContainer gap={1.5}>
          <C.HamburguerMenu src={process.env.PUBLIC_URL + '/icons/menuHamburguer.svg'} alt='Menu' />
          <Link to='/'><C.Logo src={process.env.PUBLIC_URL + '/icons/logo.svg'} alt='Logo' onClick={handleClearSelec} /></Link>
        </C.IconsContainer>

        <HeaderNavigation />

        <C.IconsContainer gap={0.8}>
          <C.SearchButton src={process.env.PUBLIC_URL + `/icons/${searchIcon}`} alt='Pesquisar' onClick={() => handleCloseSearchCart(!searchClick, false)} />
          <C.SmallSearchButton src={process.env.PUBLIC_URL + '/icons/smallSearch.svg'} alt='Pesquisar' onClick={() => handleCloseSearchCart(!searchClick, false)} />
          <C.AccountButton src={process.env.PUBLIC_URL + '/icons/account.svg'} alt='Conta' />
          <C.WineBoxButton onClick={() => handleCloseSearchCart(false, !cartClick)}>
            <C.CounterWineBox>{cart.length}</C.CounterWineBox>
          </C.WineBoxButton>
        </C.IconsContainer>


      </C.HeaderContainer>
    </C.Header>
  )
}