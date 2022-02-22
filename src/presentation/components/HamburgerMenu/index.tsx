import { NavigationItems } from '../NavigationItems';
import { ScreenContainer, PageContainer, HeaderContainer, HamburgerContainer, CloseButton, AccountTitle, AccountButton } from './styles';

type Props = {
  hamburgerClick: boolean;
  handleHamburgerClick: (close: boolean) => void;
}

export const HamburgerMenu = ({ hamburgerClick, handleHamburgerClick }: Props) => {
  return (
    <PageContainer hamburgerClick={hamburgerClick}>
      <ScreenContainer data-testid='screen' onClick={() => handleHamburgerClick(false)} />
      <HamburgerContainer>
        <HeaderContainer>
          <AccountButton src={process.env.PUBLIC_URL + '/icons/account.svg'} alt='Conta' />
          <AccountTitle>Acesse sua conta
            <span>ENTRAR
              <img src={process.env.PUBLIC_URL + '/icons/pinkRightArrow.svg'} alt='Entrar' />
            </span>
          </AccountTitle>
          <CloseButton title='Fechar menu' onClick={() => handleHamburgerClick(false)}>✖️</CloseButton>
        </HeaderContainer>
        <NavigationItems isHamburgerMenu={true} />
      </HamburgerContainer>
    </PageContainer>
  )
}