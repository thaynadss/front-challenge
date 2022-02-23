import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { HamburgerMenu } from '.';

describe('HamburgerMenu />', () => {
  it('should call function when close menu button have been clicked', () => {
    const fn = jest.fn();
    render(<HamburgerMenu isHamburgerClick={true} handleIsHamburgerClick={fn} />);

    const closeMenu = screen.getByTitle('Fechar menu');

    userEvent.click(closeMenu);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(false);
  });

  it('should call function when it is clicked outside the hamburger menu container', () => {
    const fn = jest.fn();
    render(<HamburgerMenu isHamburgerClick={true} handleIsHamburgerClick={fn} />);

    const screenOutside = screen.getByTestId('screen');

    userEvent.click(screenOutside);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});