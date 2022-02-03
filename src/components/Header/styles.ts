import styled from 'styled-components';

export const Header = styled.header`
  background-color: #FFF;
  width: 100vw;
  height: 5.6rem;
  display: inline-flex;
  justify-content: center;
  border-bottom: 2px solid rgba(204, 204, 204, 1);
`;

export const HeaderContainer = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  padding: 0 3rem;
  width: 100rem;

  @media (max-width: 991px) {
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const Logo = styled.img`
  margin-top: 0.2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchContainer = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const AccountButton = styled.img`
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const WineBoxButton = styled.div`
  background: url(${process.env.PUBLIC_URL + '/icons/winebox.svg'}) no-repeat;
  width: 3.5rem;
  height: 3.5rem;
  display: grid;

  &:hover {
    cursor: pointer;
  }
`;

export const CounterWineBox = styled.span`
  background-color: #FFF;
  color: #4FBFA5;
  font-size: 16px;
  text-align: center;
  padding: 0.1rem;
  border-radius: 19px;
  width: 1.25rem;
  height: 1.25rem;
  align-self: flex-end;
  justify-self: flex-end;
`;