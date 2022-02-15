import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { FilterByPrice } from '.';
import { CatalogContext } from '../../contexts/CatalogContext';
import { Action } from '../../contexts/CatalogContext/reducer';

describe('<FilterByPrice />', () => {
  const catalogState = {
    filter: '',
    search: '',
  };
  const catalogDispatch = jest.fn as React.Dispatch<Action>;

  const renderInCatalog = (): RenderResult => {
    return render(<CatalogContext.Provider value={{
      catalogState: catalogState,
      catalogDispatch: catalogDispatch
    }}>
      <FilterByPrice />
    </CatalogContext.Provider>);
  };

  it('should render the filter and verify if all options are not checked', () => {
    renderInCatalog();

    expect(screen.getByLabelText('Até R$40')).not.toBeChecked();
    expect(screen.getByLabelText('R$40 a R$60')).not.toBeChecked();
    expect(screen.getByLabelText('R$100 a R$200')).not.toBeChecked();
    expect(screen.getByLabelText('R$200 a R$500')).not.toBeChecked();
    expect(screen.getByLabelText('Acima de R$500')).not.toBeChecked();
  });

  it('should call function and change filter value when option is selected', () => {
    renderInCatalog();

    const optionUntil40 = screen.getByLabelText('Até R$40');
    const option40To60 = screen.getByLabelText('R$40 a R$60');
    const option100To200 = screen.getByLabelText('R$100 a R$200');
    const option200To500 = screen.getByLabelText('R$200 a R$500');
    const optionAbove500 = screen.getByLabelText('Acima de R$500');

    userEvent.type(optionUntil40, '0-40');
    expect(optionUntil40).toBeChecked();

    expect(option40To60).not.toBeChecked();
    userEvent.type(option40To60, '40-60');
    expect(option40To60).toBeChecked();

    expect(option100To200).not.toBeChecked();
    userEvent.type(option100To200, '100-200');
    expect(option100To200).toBeChecked();

    expect(option200To500).not.toBeChecked();
    userEvent.type(option200To500, '200-500');
    expect(option200To500).toBeChecked();

    expect(optionAbove500).not.toBeChecked();
    userEvent.type(optionAbove500, '500-1000000');
    expect(optionAbove500).toBeChecked();
  });

  it('should call function when the clear filter button is clicked', () => {
    const setState = jest.spyOn(React, 'useState');
    renderInCatalog();

    const button = screen.getByRole('button', { name: /limpar filtro/i });

    userEvent.click(button);
    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith('');
  });
});