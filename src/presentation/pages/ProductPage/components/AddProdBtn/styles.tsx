import styled from 'styled-components';
import { mediaSizes } from 'presentation/styles/mediaSizes';

export const ButtonsContainer = styled.div`
  width: 20.5rem;
  height: 3.5rem;
  background-color: #7EBC43;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  padding: 0 0 0 1.6rem;

  & .quantity {
    font-size: 24px;
    color: #FFF;
    padding: 0 1.02rem;
  }

  & .separator {
    font-size: 38px;
    opacity: 0.1;
    color: #FFF;
    margin: 0 2.6rem 0 2.6rem;
  }

  @media (max-width: ${mediaSizes.large}px) {
    display: none;
  } 
`;

export const QuantitySelectors = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  font-size: 20px;
  background-color: transparent;
  color: #FFF;
  cursor: pointer;
`;