import { mediaSizes } from 'presentation/styles/mediaSizes';
import { themeColors } from 'presentation/styles/themeColors';
import styled from 'styled-components';

export const PageContainer = styled.div<{ isHamburgerClick: boolean }>`
  display: ${props => props.isHamburgerClick ? 'initial' : 'none'};
  overflow: hidden;

  @media (min-width: ${mediaSizes.xmedium}px) {
    display: none;
  }
`

export const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${themeColors.background.modal};
  position: absolute;
  top: 0;
  left: 0;
`;

export const HamburgerContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  font-family: 'Lato', sans-serif;
  overflow-x: hidden;
  width: 20rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 30%);
  background-color: ${themeColors.background.lightGray};
`;

export const HeaderContainer = styled.div`
  display: flex;
  background-color: ${themeColors.background.white};
  height: 8.18rem;
  align-items: center;
  gap: 20px;
  padding-left: 1.5rem;
`;

export const AccountButton = styled.img`
`;

export const AccountTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: ${themeColors.text.gray3};
  font-size: 16px;

  span {
    font-size: 12px;
    color: ${themeColors.text.pink3};
    margin-top: 0.3rem;
    font-weight: bold;
    cursor: pointer;
  }

  img {
    padding-left: 5px;
  }
`;

export const CloseButton = styled.span`
  font-size: 30px;
  color: ${themeColors.text.gray8};
  cursor: pointer;
  margin: 0 0 5rem 2.2rem;
`;