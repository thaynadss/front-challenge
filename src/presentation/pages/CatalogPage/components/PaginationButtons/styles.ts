import styled from 'styled-components';

export const ButtonsContainer = styled.div<{ total: number }>`
  margin-top: 1.66rem;
  justify-self: center;
  gap: 0.62rem;
  font-family: 'Lato', sans-serif;
  display: ${props => props.total > 1 ? 'flex' : 'none'};

  .separator {
    font-size: 16px;
    color: #B6116E;
    padding-top: 0.8rem;
  }
`;

export const PaginationButton = styled.button<{ currentPage?: boolean, nextPage?: boolean }>`
  width: ${props => props.nextPage ? '4.56rem' : '2.37rem'};
  height: 2.37rem;
  border-radius: 3px;
  border: 1px solid #B6116E;
  font-size: 16px;
  background-color: ${props => props.currentPage ? '#B6116E' : '#FFF'};
  color: ${props => props.currentPage ? '#FFF' : '#B6116E'};
  cursor: pointer;

  &:hover {
    background-color: #e43fa0;
    border-color: #e43fa0;
    color: #FFF;
  }
`;

export const PrevNextButton = styled.button`
  border: none;
  background: transparent;
  font-size: 12px;
  color: #B6116E;
  cursor: pointer;
`;