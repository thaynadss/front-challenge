import styled from 'styled-components';
import { mediaSizes } from 'presentation/styles/mediaSizes';

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 2.07rem;

  @media (max-width: ${mediaSizes.xmedium}px) {
    display: none;
  }
`;

export const HeaderItem = styled.a`
  color: #555555;
  font-size: 18px;
  font-family: 'Lato', sans-serif;

  &:hover {
    color: #D14B8F;
    cursor: pointer;
    height: 5.6rem;
    line-height: 5.6rem;
    border-bottom: 2px solid #D14B8F;
  }
`;

export const HamburguerMenuItem = styled.a`
  color: #b6116e;
  font-size: 14px;
  border-top: 1px solid #e4e4e4;
  cursor: pointer;
  padding-left: 1.5rem;
  height: 4rem;
  font-weight: bold;
  padding-top: 1.5rem;
`;