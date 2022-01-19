import styled from 'styled-components';

export const DisplayContainer = styled.section`
  display: grid;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(1rem, 16rem));
  grid-template-rows: repeat(3, minmax(24.2rem, auto));
  gap: 2rem 2rem;
  width: 56.3rem;
  height: 77.4rem;
  margin-top: 2rem;
  overflow: hidden;
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