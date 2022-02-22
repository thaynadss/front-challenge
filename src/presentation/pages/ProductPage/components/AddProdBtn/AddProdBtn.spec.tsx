import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddProdBtn } from '.';

describe('<AddProdBtn />', () => {
  it('should render decrement button and change the quantity when clicked', () => {
    const fn = jest.fn();
    render(<AddProdBtn handleAddToCart={fn} />);

    const buttonDecrement = screen.getByRole('button', { name: '-' });
    const quantity = screen.getByText('1');

    userEvent.click(buttonDecrement);

    expect(quantity).toHaveTextContent('1');
  });

  it('should render increment button and change the quantity when clicked', () => {
    const fn = jest.fn();
    render(<AddProdBtn handleAddToCart={fn} />);

    const buttonIncrement = screen.getByRole('button', { name: '+' });
    const quantity = screen.getByText('1')

    userEvent.click(buttonIncrement);

    expect(quantity).toHaveTextContent('2');
  });

  it('should call function to add product to cart when add button is clicked', () => {
    const fn = jest.fn();
    render(<AddProdBtn handleAddToCart={fn} />);

    const addButton = screen.getByRole('button', { name: /adicionar/i });

    userEvent.click(addButton);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});