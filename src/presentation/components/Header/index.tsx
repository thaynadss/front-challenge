import { NavigationItems } from 'presentation/components/NavigationItems';
import { WineBoxButton, SmallSearchButton, SearchButton, Logo, IconsContainer, HeaderContainer, HamburguerMenu, CounterWineBox, AccountButton, Container } from './styles';
import { Link } from 'react-router-dom';
import { useCatalogContext } from 'presentation/contexts/CatalogContext';
import { useCartContext } from 'presentation/contexts/CartContext';
import { HeaderProps } from 'presentation/components/CartHeaderSearch';

export const Header = ({ searchClick, cartClick, hamburgerClick, handleHamburgerClick, handleSearchClick, handleCartClick, }: HeaderProps) => {
  const searchIcon = searchClick ? 'pinkSearch.png' : 'search.svg';
  const { catalogDispatch } = useCatalogContext();
  const { cartState: { cart } } = useCartContext();

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
    <Container>
      <HeaderContainer>
        <IconsContainer gap={1.5}>
          <HamburguerMenu src={process.env.PUBLIC_URL + '/icons/hamburgerMenu.svg'} alt='Menu' onClick={() => handleCloseSearchCart(false, false, !hamburgerClick)} />
          <Link to='/home'><Logo src={process.env.PUBLIC_URL + '/icons/logo.svg'} alt='Logo' onClick={handleHomePage} /></Link>
        </IconsContainer>

        <NavigationItems isHeader={true} />

        <IconsContainer gap={0.8}>
          <SearchButton src={process.env.PUBLIC_URL + `/icons/${searchIcon}`} alt='Pesquisar' onClick={() => handleCloseSearchCart(!searchClick, false, false)} />
          <SmallSearchButton src={process.env.PUBLIC_URL + '/icons/smallSearch.svg'} alt='Pesquisar' onClick={() => handleCloseSearchCart(!searchClick, false, false)} />
          <AccountButton src={process.env.PUBLIC_URL + '/icons/account.svg'} alt='Conta' />
          <WineBoxButton data-testid='wineBoxButton' onClick={() => handleCloseSearchCart(false, !cartClick, false)}>
            <CounterWineBox>{cart.length}</CounterWineBox>
          </WineBoxButton>
        </IconsContainer>
      </HeaderContainer>
    </Container >
  );
};