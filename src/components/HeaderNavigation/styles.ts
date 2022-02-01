import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 29.9rem;
  height: 2.07rem;
  margin: 0 5rem;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const NavigationItem = styled.a`
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