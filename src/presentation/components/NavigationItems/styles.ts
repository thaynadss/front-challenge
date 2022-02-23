import styled from 'styled-components';
import { mediaSizes } from 'presentation/styles/mediaSizes';
import { themeColors } from 'presentation/styles/themeColors';

export const NavigationContainer = styled.nav`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 29.9rem;
  margin: 0 5rem;
  height: 2.07rem;

  @media (max-width: ${mediaSizes.xmedium}px) {
    display: none;
  }
`;

export const HeaderItem = styled.a`
  color: ${themeColors.text.gray5};
  font-size: 18px;
  font-family: 'Lato', sans-serif;

  &:hover {
    color: ${themeColors.text.pink1};
    cursor: pointer;
    height: 5.6rem;
    line-height: 5.6rem;
    border-bottom: 2px solid ${themeColors.text.pink1};
  }
`;

export const HamburgerMenuItem = styled.a`
  color: ${themeColors.text.pink3};
  font-size: 14px;
  border-top: 1px solid #e4e4e4;
  cursor: pointer;
  padding-left: 1.5rem;
  height: 4rem;
  font-weight: bold;
  padding-top: 1.5rem;
`;