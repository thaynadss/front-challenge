import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { CartItem } from '.';
import { CartContext } from '../../contexts/CartContext';

describe('<CartItem />', () => {
  const cartState = { cart: [] };
  const handleCheckItemInCart = jest.fn();
  const handleIncreaseQuantity = jest.fn();
  const handleInputQuantity = jest.fn();
  const handleDecreaseQuantity = jest.fn();
  const handleRemoveFromCart = jest.fn();

  const renderCart = (): RenderResult => {
    return render(<CartContext.Provider value={{
      cartState: cartState,
      handleCheckItemInCart: handleCheckItemInCart,
      handleIncreaseQuantity: handleIncreaseQuantity,
      handleInputQuantity: handleInputQuantity,
      handleDecreaseQuantity: handleDecreaseQuantity,
      handleRemoveFromCart: handleRemoveFromCart
    }}>
      <CartItem id={0} image='img/img.png' name='title1' country='brasil' price={34.70} quantity={1} />
    </CartContext.Provider>);
  };

  it('should call function when decrement quantity button is clicked', () => {
    renderCart();

    const decrementButton = screen.getByText('-');
    userEvent.click(decrementButton);
    expect(handleDecreaseQuantity).toHaveBeenCalledTimes(1);
    expect(handleDecreaseQuantity).toHaveBeenCalledWith(0);
  });

  it('should call function when input value is changed with a number', () => {
    renderCart();

    const input = screen.getByDisplayValue('1');
    userEvent.type(input, '2');
    expect(handleInputQuantity).toHaveBeenCalledTimes(1);
    expect(handleInputQuantity).toHaveBeenCalledWith(0, 12);
  });

  it('should not call function when input value is changed with a NaN', () => {
    renderCart();

    const input = screen.getByDisplayValue('1');
    userEvent.type(input, 'a');
    expect(handleInputQuantity).not.toHaveBeenCalled();
  });

  it('should call function when increment quantity button is clicked', () => {
    renderCart();

    const incrementButton = screen.getByText('+');
    userEvent.click(incrementButton);
    expect(handleIncreaseQuantity).toHaveBeenCalledTimes(1);
    expect(handleIncreaseQuantity).toHaveBeenCalledWith(0, 1);
  });

  it('should call function when remove item button is clicked', () => {
    renderCart();

    const removeItem = screen.getByTitle(/remover item/i);
    userEvent.click(removeItem);
    expect(handleRemoveFromCart).toHaveBeenCalledTimes(1);
    expect(handleRemoveFromCart).toHaveBeenCalledWith(0);
  });

});