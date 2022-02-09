import * as C from './styles';

type Props = {
  hamburgerClick: boolean;
  handleHamburgerClick: (close: boolean) => void;
}

export const HamburgerMenu = ({ hamburgerClick, handleHamburgerClick }: Props) => {
  return (
    <C.PageContainer hamburgerClick={hamburgerClick}>
      <C.ScreenContainer onClick={() => handleHamburgerClick(false)} />
      <C.HamburgerContainer>
        <C.HeaderContainer>
          <C.AccountButton src={process.env.PUBLIC_URL + '/icons/account.svg'} alt='Conta' />
          <C.AccountTitle>Acesse sua conta
            <span>ENTRAR <img src={process.env.PUBLIC_URL + '/icons/pinkRightArrow.svg'} alt='Entrar' /></span>
          </C.AccountTitle>
          <C.CloseButton onClick={() => handleHamburgerClick(false)}>✖️</C.CloseButton>
        </C.HeaderContainer>
        <C.NavigationItem href='/club' style={{ textDecoration: 'none' }}>CLUBE</C.NavigationItem>
        <C.NavigationItem href='/home' style={{ textDecoration: 'none' }}>LOJA</C.NavigationItem>
        <C.NavigationItem href='/producers' style={{ textDecoration: 'none' }}>PRODUTORES</C.NavigationItem>
        <C.NavigationItem href='/offers' style={{ textDecoration: 'none' }}>OFERTAS</C.NavigationItem>
        <C.NavigationItem href='/events' style={{ textDecoration: 'none' }}>EVENTOS</C.NavigationItem>
      </C.HamburgerContainer>
    </C.PageContainer>
  )
}