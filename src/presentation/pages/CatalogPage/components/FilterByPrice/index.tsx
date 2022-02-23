import { useEffect, useState } from 'react';
import { useCatalogContext } from 'presentation/contexts/CatalogContext';
import { FilterTitle, FilterLegend, FilterLabel, FilterInput, FilterForm, FilterFieldset, FilterContainer, ClearSelection } from './styles';
import { filterOptions } from './filterOptions';

export const FilterByPrice = () => {
  const [priceSelected, setPriceSelected] = useState('');
  const isPriceSelected = (value: string): boolean => priceSelected === value;
  const { catalogState, catalogDispatch } = useCatalogContext();

  useEffect(() => {
    catalogDispatch({
      type: 'FILTER_SELECTED',
      payload: `&filter=${priceSelected}`
    })
  }, [priceSelected, catalogDispatch]);

  useEffect(() => {
    if (catalogState.filter === '') {
      setPriceSelected('');
    }
  }, [catalogState.filter]);

  return (
    <FilterContainer>
      <FilterTitle>Refine sua busca</FilterTitle>
      <FilterForm>
        <FilterFieldset>
          <FilterLegend>Por preço</FilterLegend>
          {filterOptions.map((item, index) => (
            <FilterLabel key={index}>
              <FilterInput type='radio' name='pricefilter' value={item.value} checked={isPriceSelected(item.value)} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> {item.title}
            </FilterLabel>
          ))}
        </FilterFieldset>
      </FilterForm>

      <ClearSelection onClick={() => setPriceSelected('')}>Limpar filtro</ClearSelection>
    </FilterContainer>
  );
};