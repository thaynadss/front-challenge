import styled from 'styled-components';

export const ButtonsContainer = styled.div<{ total: number }>`
  margin-top: 1.66rem;
  justify-self: center;
  font-family: 'Lato', sans-serif;
  visibility: ${props => props.total > 1 ? 'visible' : 'hidden'};
`;

export const PaginationButton = styled.button<{ width: number, actualPage?: string }>`
  width: ${props => `${props.width}rem`};
  height: 2.37rem;
  border-radius: 3px;
  border: 1px solid #B6116E;
  font-size: 16px;
  background-color: ${props => props.actualPage ? '#B6116E' : '#FFF'};
  color: ${props => props.actualPage ? '#FFF' : '#B6116E'};
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #e43fa0;
    border-color: #e43fa0;
    color: #FFF;
  }
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