import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductPage from '.';
import contextRender from '../../helpers/contextRender';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('<ProductPage />', () => {
  it('should redirect to the previous page when the back button is clicked', async () => {
    const { catalogAndCartAndProduct } = contextRender({});
    catalogAndCartAndProduct(<ProductPage />);

    const backButton = screen.getByRole('button', { name: /voltar/i });
    userEvent.click(backButton);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toBeCalledWith(-1);
  });
});
