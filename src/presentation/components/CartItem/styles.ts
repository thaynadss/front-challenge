import styled from 'styled-components';

export const CartCardContainer = styled.div`
  height: 9.02rem;
  display: grid;
  grid-template-columns: 4.5rem fit-content 1.125rem;
  grid-template-rows: 4.8rem 2.2rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  background-color: #f5f5f5;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 4.5rem;
  height: 6.87rem;
  object-fit: contain;
  grid-row-end: 2;
`;

export const CardTitle = styled.h2`
  color: #333;
  font-size: 14px;
  line-height: 1.2;
  font-weight: normal;
  grid-row-start: 1;
  grid-column-start: 2;
  grid-column-end: 2;
  padding-right: 1.2rem;
`;

export const ProductCountry = styled.span`
  font-size: 12px;
  color: #999;
  font-weight: normal;
  display: block;
`;

export const IncremDecremButton = styled.div`
  width: 3.75rem;
  height: 2.19rem;
  padding: 0 0.6rem;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  color: #808080;
  font-weight: bold;
  font-size: 16px;
  grid-column-start: 2;
  align-items: center;
  grid-row-start: 2;
  justify-self: flex-start;
  cursor: pointer;
`;

export const QuantityInput = styled.input`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  color: #000;
  font-size: 12px;
  padding: 1em 0;
  text-align: center;
  width: 2em;

  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -moz-appearance: textfield;
  }
`;

export const ProductValue = styled.h3`
  font-size: 20px;
  color: #b6116e;
  grid-column-end: 3;
  grid-row-start: 2;
  justify-self: flex-end;
  align-self: center;

  & .currency {
    font-size: 14px;
  }

  & .decimal {
    font-size: 16px;
  }
`;

export const SmallProductValue = styled.h3`
  font-size: 14px;
  color: #b6116e;
  grid-column-end: 3;
  grid-row-start: 2;
  justify-self: flex-end;
  align-self: center;
  font-weight: bold;
`;

export const RemoveItem = styled.div`
  width: 1.12rem;
  height: 1.12rem;
  border-radius: 13px;
  color: rgb(159, 159, 159);
  border: 1px solid rgb(159, 159, 159);
  text-align: center;
  font-size: 13px;
  justify-self: flex-end;
  align-self: flex-start;
  grid-column-end: 3;
  grid-row-start: 1;
  cursor: pointer;
`;