import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductDescription } from '.';
import { itemMock } from '../ProductCard/productMock';
import contextRender from '../../helpers/contextRender';

describe('<ProductsDescription />', () => {
  it('should call function when the add button is clicked, to send the product to the cart with the correct quantity', () => {
    const { cartAndProduct, handleCheckItemInCart } = contextRender({});
    cartAndProduct(<ProductDescription />);

    const addButtons = screen.getAllByRole('button', { name: /adicionar/i });

    userEvent.click(addButtons[0]);
    userEvent.click(addButtons[1]);
    expect(handleCheckItemInCart).toHaveBeenCalledTimes(2);
    expect(handleCheckItemInCart).toHaveBeenCalledWith(itemMock);
  });
});