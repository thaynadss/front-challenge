import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  margin-top: 1.66rem;
  justify-self: center;
  font-family: 'Lato', sans-serif;
`;

export const PaginationButton = styled.button<{ width: number, color: string, background: string }>`
  width: ${props => `${props.width}rem`};
  height: 2.37rem;
  border-radius: 3px;
  border: 1px solid #B6116E;
  font-size: 16px;
  background-color: ${props => props.background};
  color: ${props => props.color};
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const NextButton = styled.button`
  border: none;
  font-size: 12px;
  color: #B6116E;
  cursor: pointer;

  span{
    font-size: 16px;
    margin-right: 0.78rem;
  }
`;