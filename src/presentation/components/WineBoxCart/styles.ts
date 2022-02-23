import styled from 'styled-components';
import { themeColors } from 'presentation/styles/themeColors';

export const PageContainer = styled.div<{ isCartClick: boolean }>`
  display: ${props => props.isCartClick ? 'initial' : 'none'};
  overflow: hidden;
`

export const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${themeColors.background.modal};
  position: absolute;
  top: 0;
  left: 0;
`;

export const CartContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-family: 'Lato', sans-serif;
  overflow-x: hidden;
  width: 21.9rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 4px 0 rgb(0 0 0 / 18%);
  background-color: ${themeColors.background.lightGray};
`;

export const CartHeader = styled.div`
  font-size: 20px;
  color: ${themeColors.text.black};
  background-color: ${themeColors.background.white};
  padding: 20px;
  width: 100%;
  height: 3.75rem;
  position: fixed;
`;

export const ArrowLeft = styled.img`
  width: 1.25rem;
  height: 0.93rem;
  margin-right: 1.3rem;
  cursor: pointer;
`;

export const ProductsContainer = styled.div`
  background-color: ${themeColors.background.lightGray};
  margin-top: 3.75rem;
  width: 100%;
  overflow-y: scroll;
`;

export const FooterContainer = styled.div`
  background-color: ${themeColors.background.white};
  padding: 20px;
  width: 21.9em;
  height: 8.25rem;
  align-self: flex-end;
  bottom: 0;
  position: fixed;
`;

export const CartSubtotal = styled.div<{ smallSize: boolean }>`
  color: ${themeColors.text.gray3};
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 1rem;

  & .subtotal {
    color: ${themeColors.text.pink3};
    font-size: ${props => props.smallSize ? '20px' : '28px'};
    font-weight: normal;
  }
`;

export const FinishButton = styled.button`
  width: 100%;
  height: 3rem;
  color: ${themeColors.background.white};
  background-color: ${themeColors.button.green};
  border: none;
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  justify-content: center;
`;

export const EmptyCartStyle = styled.div<{ size: number, color: string }>`
  text-align: center;
  font-weight: bold;
  font-size: ${props => `${props.size}px`};
  color: ${props => props.color};
  padding: 1rem;
`;