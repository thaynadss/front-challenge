import { NavigationItems } from '../NavigationItems';
import {
  ScreenContainer,
  PageContainer,
  HeaderContainer,
  HamburgerContainer,
  CloseButton,
  AccountTitle,
  AccountButton
} from './styles';

type Props = {
  isHamburgerClick: boolean;
  handleIsHamburgerClick: (close: boolean) => void;
}

export const HamburgerMenu = ({ isHamburgerClick, handleIsHamburgerClick }: Props) => {
  return (
    <PageContainer isHamburgerClick={isHamburgerClick}>
      <ScreenContainer data-testid='screen' onClick={() => handleIsHamburgerClick(false)} />
      <HamburgerContainer>
        <HeaderContainer>
          <AccountButton src={process.env.PUBLIC_URL + '/icons/account.svg'} alt='Conta' />
          <AccountTitle>Acesse sua conta
            <span>ENTRAR
              <img src={process.env.PUBLIC_URL + '/icons/pinkRightArrow.svg'} alt='Entrar' />
            </span>
          </AccountTitle>
          <CloseButton title='Fechar menu' onClick={() => handleIsHamburgerClick(false)}>✖️</CloseButton>
        </HeaderContainer>
        <NavigationItems isHamburgerMenu={true} />
      </HamburgerContainer>
    </PageContainer>
  )
}