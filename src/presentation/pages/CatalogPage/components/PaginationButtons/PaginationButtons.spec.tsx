import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaginationButtons } from '.';

describe('<PaginationButtons />', () => {
  it('should not render previous button when current page is first', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={2} currentPage={1} handleCurrentPage={fn} />);

    const previousButton = screen.queryByRole('button', { name: /anterior/i });

    expect(previousButton).not.toBeInTheDocument();
  });

  it('should render previous button when current page is greater than one and should call function when it is clicked', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={2} currentPage={2} handleCurrentPage={fn} />);

    const previousButton = screen.getByRole('button', { name: /anterior/i });

    userEvent.click(previousButton);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should render first page and last page button and should call function when it is clicked', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={2} currentPage={1} handleCurrentPage={fn} />);

    const firstPage = screen.getByRole('button', { name: '1' });
    const lastPage = screen.getByRole('button', { name: '2' });

    userEvent.click(firstPage);
    userEvent.click(lastPage);

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should not render left separator when current page is less or equal to three and should not render right separator when current page is equal or greater than the result of total pages - 2', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={5} currentPage={3} handleCurrentPage={fn} />);

    const separators = screen.getAllByText('...');

    expect(separators).toHaveLength(2);
    expect(separators[0]).not.toBeVisible();
    expect(separators[1]).not.toBeVisible();
  });

  it('should render left separator when current page is greater than three and should render right separator when current page is less than the result of total pages - 2', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={7} currentPage={4} handleCurrentPage={fn} />);

    const separators = screen.getAllByText('...');

    expect(separators[0]).toBeInTheDocument();
    expect(separators[1]).toBeInTheDocument();
  });

  it('should render antepenultimate page button when current page is last and total pages is greater than three, and should call function when it is clicked', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={4} currentPage={4} handleCurrentPage={fn} />);

    const antepenultimatePage = screen.getByRole('button', { name: '2' });

    userEvent.click(antepenultimatePage);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should render previous page button when current page is greater than two and should call function when it is clicked', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={3} currentPage={3} handleCurrentPage={fn} />);

    const previousPage = screen.getByRole('button', { name: '2' });

    userEvent.click(previousPage);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should render current page button when it is not the first or last page and should call function when it is clicked', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={3} currentPage={2} handleCurrentPage={fn} />);

    const currentPage = screen.getByRole('button', { name: '2' });

    userEvent.click(currentPage);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should render next page button when current page is less than the result of total pages - 1 and should call function when it is clicked', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={3} currentPage={1} handleCurrentPage={fn} />);

    const nextPage = screen.getByRole('button', { name: '2' });

    userEvent.click(nextPage);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should render third button when current page is first and total pages is greater than three, and should call function when it is clicked', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={4} currentPage={1} handleCurrentPage={fn} />);

    const thirdPage = screen.getByRole('button', { name: '3' });

    userEvent.click(thirdPage);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should not render next button when current page is last', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={2} currentPage={2} handleCurrentPage={fn} />);

    const nextButton = screen.queryByRole('button', { name: /próxima/i });

    expect(nextButton).not.toBeInTheDocument();
  });

  it('should render next button when current page is not the last and should call function when it is clicked', () => {
    const fn = jest.fn();
    render(<PaginationButtons totalPages={2} currentPage={1} handleCurrentPage={fn} />);

    const nextButton = screen.getByRole('button', { name: /próxima/i });

    userEvent.click(nextButton);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});