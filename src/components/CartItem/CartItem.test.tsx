import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartItem } from '.';

describe('<CartItem />', () => {
  it('should decrement quantity by clicking', () => {
    const fn = jest.fn();

    render(<CartItem id={1} image='img/img.png' name='title1' country='brasil' price={34.70} quantity={1} />);

    const decrementButton = screen.getByText('-');
    const input = screen.getByDisplayValue(1);

    userEvent.click(decrementButton);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(input.textContent).toBe('1');
  });


  it('should change quantity by input', () => {
    // const fn = jest.fn();

    // render(<CartItem id={1} image='img/img.png' name='title1' country='brasil' price={34.70} quantity={1} />);

    // const input = screen.getByDisplayValue(1);
    // const value = '3';
    // userEvent.type(input, value);
  });
});
