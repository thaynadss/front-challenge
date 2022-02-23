import styled from 'styled-components';
import { mediaSizes } from 'presentation/styles/mediaSizes';
import { themeColors } from 'presentation/styles/themeColors';

export const ButtonsContainer = styled.div`
  width: 20.5rem;
  height: 3.5rem;
  background-color: ${themeColors.button.green};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  padding: 0 0 0 1.6rem;

  & .quantity {
    font-size: 24px;
    color: ${themeColors.background.white};
    padding: 0 1.02rem;
  }

  & .separator {
    font-size: 38px;
    opacity: 0.1;
    color: ${themeColors.background.white};
    margin: 0 2.6rem 0 2.6rem;
  }

  @media (max-width: ${mediaSizes.large}px) {
    display: none;
  } 
`;

export const QuantitySelectors = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid ${themeColors.button.gray};
  border-radius: 24px;
  font-size: 20px;
  background-color: transparent;
  color: ${themeColors.background.white};
  cursor: pointer;
`;