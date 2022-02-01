import styled from 'styled-components';

export const DisplayContainer = styled.section`
  display: grid;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(1rem, 16rem));
  grid-template-rows: repeat(3, minmax(24.2rem, auto));
  gap: 2rem 2rem;
  margin-top: 2rem;

  @media (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(1rem, 16rem));
    grid-template-rows: repeat(4, minmax(24.2rem, auto));
    gap: 1.5rem 1.5rem;
  }

  @media (max-width: 540px) {
    display: grid;
    grid-template-columns: minmax(1rem, 16rem);
    grid-template-rows: repeat(9, minmax(24.2rem, auto));
    gap: 1.5rem 1.5rem;
  }
`;

export const QuantityProducts = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  color: #262626;
  font-weight: normal;
  display: block;

  span {
    font-weight: bold;
  }
`;