import {
  WineBoxButton,
  SmallSearchButton,
  SearchButton,
  Logo,
  IconsContainer,
  HeaderContainer,
  HamburguerMenu,
  CounterWineBox,
  AccountButton,
  Container
} from './styles';
import { Link } from 'react-router-dom';
import { NavigationItems } from 'presentation/components/NavigationItems';
import { useCatalogContext } from 'presentation/contexts/CatalogContext';
import { useCartContext } from 'presentation/contexts/CartContext';
import { HeaderProps } from 'presentation/components/CartHeaderSearch';

export const Header = ({ isSearchClick, isCartClick, isHamburgerClick, handleIsHamburgerClick, handleIsSearchClick, handleIsCartClick, }: HeaderProps) => {
  const searchIcon = isSearchClick ? 'pinkSearch.png' : 'search.svg';
  const { catalogDispatch } = useCatalogContext();
  const { cartState: { cart } } = useCartContext();

  const handleOpenCloseModal = (search: boolean, cart: boolean, hamburger: boolean) => {
    handleIsSearchClick(search);
    handleIsCartClick(cart);
    handleIsHamburgerClick(hamburger);
  };

  const handleHomePage = () => {
    catalogDispatch({
      type: 'SEARCHED_TEXT',
      payload: ''
    });
    handleOpenCloseModal(false, false, false);
  };

  return (
    <Container>
      <HeaderContainer>
        <IconsContainer gap={1.5}>
          <HamburguerMenu src={process.env.PUBLIC_URL + '/icons/hamburgerMenu.svg'} alt='Menu' onClick={() => handleOpenCloseModal(false, false, !isHamburgerClick)} />
          <Link to='/home'><Logo src={process.env.PUBLIC_URL + '/icons/logo.svg'} alt='Logo' onClick={handleHomePage} /></Link>
        </IconsContainer>

        <NavigationItems isHeader={true} />

        <IconsContainer gap={0.8}>
          <SearchButton src={process.env.PUBLIC_URL + `/icons/${searchIcon}`} alt='Pesquisar' onClick={() => handleOpenCloseModal(!isSearchClick, false, false)} />
          <SmallSearchButton src={process.env.PUBLIC_URL + '/icons/smallSearch.svg'} alt='Pesquisar' onClick={() => handleOpenCloseModal(!isSearchClick, false, false)} />
          <AccountButton src={process.env.PUBLIC_URL + '/icons/account.svg'} alt='Conta' />
          <WineBoxButton data-testid='wineBoxButton' onClick={() => handleOpenCloseModal(false, !isCartClick, false)}>
            <CounterWineBox>{cart.length}</CounterWineBox>
          </WineBoxButton>
        </IconsContainer>
      </HeaderContainer>
    </Container >
  );
};