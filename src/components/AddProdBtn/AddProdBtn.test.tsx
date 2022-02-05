import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { AddProdBtn } from '.'

describe('<AddProdBtn />', () => {
  it('should render decrement button and change the quantity by clicking', () => {
    const fn = jest.fn();

    render(<AddProdBtn handleAddToCart={fn} />);

    const buttonDecrement = screen.getByRole('button', { name: '-' });

    const quantity = screen.getByText('1')

    expect(buttonDecrement).toBeInTheDocument();
    expect(quantity).toBeInTheDocument()

    userEvent.click(buttonDecrement);
    expect(quantity).toHaveTextContent('1');
  })

  it('should render increment button and change the quantity by clicking', () => {
    const fn = jest.fn();

    render(<AddProdBtn handleAddToCart={fn} />);

    const buttonIncrement = screen.getByRole('button', { name: '+' });

    const quantity = screen.getByText('1')

    expect(buttonIncrement).toBeInTheDocument();
    expect(quantity).toBeInTheDocument()

    userEvent.click(buttonIncrement);
    expect(quantity).toHaveTextContent('2');
  })

  it('should render add button and call function to add product to cart', () => {
    const fn = jest.fn();

    render(<AddProdBtn handleAddToCart={fn} />);

    const addButton = screen.getByRole('button', { name: /adicionar/i });

    expect(addButton).toBeInTheDocument();

    userEvent.click(addButton);

    expect(fn).toHaveBeenCalledTimes(1);
  })
})