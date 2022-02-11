import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { HamburgerMenu } from '.'

describe('HamburgerMenu />', () => {
  it('should call function when close menu button have been clicked', () => {
    const fn = jest.fn();

    render(<HamburgerMenu hamburgerClick={false} handleHamburgerClick={fn} />);

    const closeMenu = screen.getByTitle('Fechar menu');
    userEvent.click(closeMenu);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should call function when it is clicked outside the hamburger menu container', () => {
    const fn = jest.fn();

    render(<HamburgerMenu hamburgerClick={false} handleHamburgerClick={fn} />);

    const screenOutside = screen.getByTestId('screen');
    userEvent.click(screenOutside);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should check if the anchors have the attributes for navigation', () => {
    const fn = jest.fn();

    render(<HamburgerMenu hamburgerClick={false} handleHamburgerClick={fn} />);

    const clubButton = screen.getByText(/clube/i);
    expect(clubButton).toHaveAttribute('href', '/club');

    const homeButton = screen.getByText(/loja/i);
    expect(homeButton).toHaveAttribute('href', '/home');

    const producersButton = screen.getByText(/produtores/i);
    expect(producersButton).toHaveAttribute('href', '/producers');

    const offersButton = screen.getByText(/ofertas/i);
    expect(offersButton).toHaveAttribute('href', '/offers');

    const eventsButton = screen.getByText(/eventos/i);
    expect(eventsButton).toHaveAttribute('href', '/events');
  });
});