import styled from 'styled-components';
import { mediaSizes } from 'presentation/styles/mediaSizes';
import { themeColors } from 'presentation/styles/themeColors';

export const DisplayContainer = styled.section`
  display: grid;
  font-family: 'Lato', sans-serif;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(1rem, 16rem));
  grid-template-rows: repeat(3, minmax(24.2rem, auto));
  gap: 2rem 2rem;
  margin-top: 2rem;

  @media (max-width: ${mediaSizes.large}px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(1rem, 16rem));
    grid-template-rows: repeat(4, minmax(24.2rem, auto));
    gap: 1.5rem 1.5rem;
  }

  @media (max-width:${mediaSizes.small}px) {
    display: grid;
    grid-template-columns: minmax(1rem, 16rem);
    grid-template-rows: repeat(9, minmax(24.2rem, auto));
    gap: 1.5rem 1.5rem;
  }
`;

export const QuantityandButton = styled.div`
  display: inline-flex;
  justify-content: space-between;
`;

export const QuantityProducts = styled.h3`
  font-size: 18px;
  color: ${themeColors.text.gray7};
  font-weight: normal;
  display: block;

  span {
    font-weight: bold;
  }
`;

export const ClearSearch = styled.button`
  border: 0.5px solid ${themeColors.text.pink3};
  background: transparent;
  font-size: 14px;
  color: ${themeColors.text.pink3};
  cursor: pointer;
  width: 10rem;
  height: 2rem;
  border-radius: 3px;
  letter-spacing: 0.4px;

  &:hover {
    background-color: ${themeColors.button.lightPink};
    border-color: ${themeColors.button.lightPink};
    color: ${themeColors.background.white};
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 4rem;
`;

export const LoadingTitle = styled.h1`
  font-size: 22px;
  font-family: 'Lato', sans-serif;
`;

export const LoadingGif = styled.img`
  width: 2rem;
  height: 2rem;
`;