import styled from 'styled-components';
import { mediaSizes } from 'presentation/styles/mediaSizes';
import { themeColors } from 'presentation/styles/themeColors';

export const Container = styled.header`
  background-color: ${themeColors.background.white};
  width: 100vw;
  height: 5.6rem;
  display: inline-flex;
  justify-content: center;
  border-bottom: 2px solid ${themeColors.border.gray3};
`;

export const HeaderContainer = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  padding: 0 3rem;
  width: 100rem;

  @media (max-width: ${mediaSizes.xmedium}px) {
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const IconsContainer = styled.div<{ gap: number }>`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: ${mediaSizes.xmedium}px) {
    gap: ${props => `${props.gap}rem`};
  }
`;

export const Logo = styled.img`
  margin-top: 0.2rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${mediaSizes.xmedium}px) {
    width: 4.87rem;
    height: 1.43rem;
  }
`;

export const SearchButton = styled.img`
  width: 3.5rem;
  height: 3.5rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${mediaSizes.xmedium}px) {
    display: none;
  }
`;

export const SmallSearchButton = styled.img`
  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${mediaSizes.xmedium}px) {
    display: none;
  }
`;

export const AccountButton = styled.img`
  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${mediaSizes.xmedium}px) {
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
  background-color: ${themeColors.background.white};
  color: ${themeColors.text.lightGreen};
  font-size: 16px;
  text-align: center;
  padding: 0.1rem;
  border-radius: 19px;
  width: 1.25rem;
  height: 1.25rem;
  align-self: flex-end;
  justify-self: flex-end;
`;

export const HamburguerMenu = styled.img`
  @media (min-width: ${mediaSizes.xmedium}px) {
    display: none;
  }

  align-self: center;
  margin-bottom: 0.2rem;
  cursor: pointer;
`;