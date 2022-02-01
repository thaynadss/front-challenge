import styled from 'styled-components';

export const CardContainer = styled.article`
  box-shadow: 0 10px 15px 0 rgb(0 0 0 0.1);
  width: fit-content;
`;

export const DisplayProduct = styled.div`
  background-color: #FFF;
  font-family: 'Lato', sans-serif;
  display: grid;
  row-gap: 0.6rem;
  justify-items: center;
  justify-content: stretch;
  padding: 0.6rem 0 1.3rem;
`;

export const ProductImage = styled.img`
  width: 12.4rem;
  height: 11.1rem;
  cursor: pointer;
  object-fit: contain;
`;

export const Title = styled.h2`
  height: 2.25rem;
  font-size: 16px;
  color: rgba(29, 29, 27, 1);
  text-align: center;
  cursor: pointer;
`;

export const SmallerCardText = styled.h3<{ size: number, color: string, decoration?: string, bold?: string }>`
  font-size: ${props => `${props.size}px`};
  color: ${props => props.color};
  text-decoration: ${props => props.decoration ? props.decoration : 'none'};
  text-transform: uppercase;
  font-weight: ${props => props.bold ? props.bold : 'normal'};
`;

export const Porcentage = styled.span`
    width: 3rem;
    padding: 0.1rem;
    margin-left: 0.4rem;
    color: #FFF;
    font-size: 10px;
    text-align: center;
    background-color: rgba(247, 149, 82, 1);
    border-radius: 1.94px;
    display: inline-block;
`;

export const MemberValue = styled.span`
  color: #B6116E;
  font-size: 11px;
  display: inline-block;
  font-weight: normal;
  margin-left: 0.4rem;

  span {
    font-size: 21px;
  }
`;

export const AddProductButton = styled.button<{ width: number, height: number, size: number }>`
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

  &:hover {
    cursor: pointer;
  }
`;