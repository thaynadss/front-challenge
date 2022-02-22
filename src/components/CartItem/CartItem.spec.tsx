import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartItem } from '.';
import contextRender from 'mocks/contextRender';

describe('<CartItem />', () => {
  it('should call function when decrement quantity button is clicked', () => {
    const { cart, handleDecreaseQuantity } = contextRender({});
    render(cart(<CartItem id={0} image='img/img.png' name='title1' country='brasil' price={34.70} quantity={1} />
    ));

    const decrementButton = screen.getByText('-');
    userEvent.click(decrementButton);
    expect(handleDecreaseQuantity).toHaveBeenCalledTimes(1);
    expect(handleDecreaseQuantity).toHaveBeenCalledWith(0);
  });

  it('should call function when input value is changed with a number', () => {
    const { cart, handleInputQuantity } = contextRender({});
    render(cart(<CartItem id={0} image='img/img.png' name='title1' country='brasil' price={34.70} quantity={1} />
    ));

    const input = screen.getByDisplayValue('1');
    userEvent.type(input, '2');
    expect(handleInputQuantity).toHaveBeenCalledTimes(1);
    expect(handleInputQuantity).toHaveBeenCalledWith(0, 12);
  });

  it('should not call function when input value is changed with a NaN', () => {
    const { cart, handleInputQuantity } = contextRender({});
    render(cart(<CartItem id={0} image='img/img.png' name='title1' country='brasil' price={34.70} quantity={1} />
    ));

    const input = screen.getByDisplayValue('1');
    userEvent.type(input, 'a');
    expect(handleInputQuantity).not.toHaveBeenCalled();
  });

  it('should call function when increment quantity button is clicked', () => {
    const { cart, handleIncreaseQuantity } = contextRender({});
    render(cart(<CartItem id={0} image='img/img.png' name='title1' country='brasil' price={34.70} quantity={1} />
    ));

    const incrementButton = screen.getByText('+');
    userEvent.click(incrementButton);
    expect(handleIncreaseQuantity).toHaveBeenCalledTimes(1);
    expect(handleIncreaseQuantity).toHaveBeenCalledWith(0, 1);
  });

  it('should call function when remove item button is clicked', () => {
    const { cart, handleRemoveFromCart } = contextRender({});
    render(cart(<CartItem id={0} image='img/img.png' name='title1' country='brasil' price={34.70} quantity={1} />
    ));

    const removeItem = screen.getByTitle(/remover item/i);
    userEvent.click(removeItem);
    expect(handleRemoveFromCart).toHaveBeenCalledTimes(1);
    expect(handleRemoveFromCart).toHaveBeenCalledWith(0);
  });

});