import { render, screen } from '@testing-library/react';
import { HeaderNavigation } from '.';

describe('HeaderNavigation />', () => {
  it('should check if the anchors have the attributes for navigation', () => {
    render(<HeaderNavigation />);

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