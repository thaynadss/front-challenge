import styled from 'styled-components';

export const PageContainer = styled.div<{ hamburgerClick: boolean }>`
  display: ${props => props.hamburgerClick ? 'initial' : 'none'};
  overflow: hidden;
`

export const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.24);
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
  background-color: #f5f5f5;
`;

export const HeaderContainer = styled.div`
  display: flex;
  background-color: #FFF;
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
  color: #666;
  font-size: 16px;

  span {
    font-size: 12px;
    color: #b6116e;
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
  color: rgba(29, 29, 27, 1);
  cursor: pointer;
  margin: 0 0 5rem 2.2rem;
`;

export const NavigationItem = styled.a`
  color: #b6116e;
  font-size: 14px;
  border-top: 1px solid #e4e4e4;
  cursor: pointer;
  padding-left: 1.5rem;
  height: 4rem;
  font-weight: bold;
  padding-top: 1.5rem;
`;
