import styled from 'styled-components';

export const AddProduct = styled.button<{ width: number, height: number, size: number, fontStyle: string }>`
  width: ${props => `${props.width}rem`};
  height: ${props => `${props.height}rem`};
  border-radius: 3.89px;
  text-align: center;
  color: #FFF;
  background-color: rgba(126, 188, 67, 1);
  border: none;
  font-family: 'Lato', sans-serif;
  font-size: ${props => `${props.size}px`};
  margin-top: 1rem;
  text-transform: ${props => props.fontStyle};

  &:hover {
    cursor: pointer;
  }
`;