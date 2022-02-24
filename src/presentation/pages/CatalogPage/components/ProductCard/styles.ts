import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { themeColors } from 'presentation/styles/themeColors';

export const CardLink = styled(Link)`
  display: grid;
  justify-items: center;
  row-gap: 0.6rem;
  text-decoration: none;
`;

export const CardContainer = styled.article`
  box-shadow: 0 10px 15px 0 rgb(0 0 0 0.1);
  width: fit-content;
`;

export const DisplayProduct = styled.div`
  background-color: ${themeColors.background.white};
  font-family: 'Lato', sans-serif;
  display: grid;
  row-gap: 0.6rem;
  justify-items: center;
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
  color: ${themeColors.text.gray8};
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
    color: ${themeColors.background.white};
    font-size: 10px;
    text-align: center;
    background-color: ${themeColors.text.orange};
    border-radius: 1.94px;
    display: inline-block;
`;

export const MemberValue = styled.span`
  color: ${themeColors.text.pink3};
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
  color: ${themeColors.background.white};
  background-color: ${themeColors.button.green};
  border: none;
  font-family: 'Lato', sans-serif;
  font-size: ${props => `${props.size}px`};
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
  }
`;