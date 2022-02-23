import { render, screen } from '@testing-library/react';
import { NavigationItems } from '.';

describe('NavigationItems />', () => {
  it('should render the component if the isHeader props is true and check if the anchors have the attributes for navigation', () => {
    render(<NavigationItems isHeader={true} />);

    const clubButton = screen.getByText(/clube/i)
    const homeButton = screen.getByText(/loja/i);
    const producersButton = screen.getByText(/produtores/i);
    const offersButton = screen.getByText(/ofertas/i);
    const eventsButton = screen.getByText(/eventos/i);

    expect(clubButton).toHaveAttribute('href', '/club');
    expect(homeButton).toHaveAttribute('href', '/home');
    expect(producersButton).toHaveAttribute('href', '/producers');
    expect(offersButton).toHaveAttribute('href', '/offers');
    expect(eventsButton).toHaveAttribute('href', '/events');
  });

  it('should render the component if the isHamburgerMenu props is true and check if the anchors have the attributes for navigation', () => {
    render(<NavigationItems isHamburgerMenu={true} />);

    const clubButton = screen.getByText(/clube/i)
    const homeButton = screen.getByText(/loja/i);
    const producersButton = screen.getByText(/produtores/i);
    const offersButton = screen.getByText(/ofertas/i);
    const eventsButton = screen.getByText(/eventos/i);

    expect(clubButton).toHaveAttribute('href', '/club');
    expect(homeButton).toHaveAttribute('href', '/home');
    expect(producersButton).toHaveAttribute('href', '/producers');
    expect(offersButton).toHaveAttribute('href', '/offers');
    expect(eventsButton).toHaveAttribute('href', '/events');
  });
});