import { screen } from '@testing-library/react';
import Page404 from '.';
import contextRender from 'mocks/contextRender';

describe('<Page404 />', () => {
  it('should check if the link back to the home page has the attribute to do this when clicked', async () => {
    const { catalogAndCartAndProduct } = contextRender({});
    catalogAndCartAndProduct(<Page404 />);

    expect(screen.getByRole('link', { name: /voltar para a home/i })).toHaveAttribute('href', '/home');
  });
});
