import styled from 'styled-components';

export const ScreenContainer = styled.div<{ cartClick: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.24);
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: flex-end;
  visibility: ${props => props.cartClick ? 'visible' : 'hidden'};
`;

export const CartContainer = styled.div`
  width: 27.35vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 4px 0 rgb(0 0 0 / 18%);
  overflow: scroll;
`;

export const CartHeader = styled.div`
  font-size: 20px;
  color: #000;
  background-color: #FFF;
  padding: 20px;
  width: 100%;
  height: 3.75rem;
  position: fixed;
`;

export const ArrowLeft = styled.img`
  width: 1.25rem;
  height: 0.93rem;
  margin-right: 1.3rem;
`;

export const ProductsContainer = styled.div`
  background-color: #f5f5f5;
  margin-top: 3.75rem;
  width: 100%;
`;

export const FooterContainer = styled.div`
  background-color: #FFF;
  padding: 20px;
  width: 27.35vw;
  height: 8.25rem;
  align-self: flex-end;
  bottom: 0;
  position: fixed;
`;

export const CartSubtotal = styled.div`
  color: #666;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 1rem;

  & .subtotal {
    color: #b6116e;
    font-size: 28px;
    font-weight: normal;
  }

  & .value {
    margin-left: 0.40rem;
  }
`;

export const FinishButton = styled.button`
  width: 100%;
  height: 3rem;
  color: #FFF;
  background-color: #7ebc43;
  border: none;
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
`;