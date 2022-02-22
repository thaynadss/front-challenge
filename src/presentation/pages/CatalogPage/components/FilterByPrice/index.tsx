import { useEffect, useState } from 'react';
import { useCatalogContext } from 'presentation/contexts/CatalogContext';
import { FilterTitle, FilterLegend, FilterLabel, FilterInput, FilterForm, FilterFieldset, FilterContainer, ClearSelection } from './styles';

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
          <FilterLabel>
            <FilterInput type='radio' name='pricefilter' value='0-40' checked={isPriceSelected('0-40')} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> Até R$40
          </FilterLabel>

          <FilterLabel>
            <FilterInput type='radio' name='pricefilter' value='40-60' checked={isPriceSelected('40-60')} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> R$40 a R$60
          </FilterLabel>

          <FilterLabel>
            <FilterInput type='radio' name='pricefilter' value='100-200' checked={isPriceSelected('100-200')} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> R$100 a R$200
          </FilterLabel>

          <FilterLabel>
            <FilterInput type='radio' name='pricefilter' value='200-500' checked={isPriceSelected('200-500')} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> R$200 a R$500
          </FilterLabel>

          <FilterLabel>
            <FilterInput type='radio' name='pricefilter' value='500-1000000' checked={isPriceSelected('500-1000000')} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> Acima de R$500
          </FilterLabel>

        </FilterFieldset>
      </FilterForm>

      <ClearSelection onClick={() => setPriceSelected('')}>Limpar filtro</ClearSelection>
    </FilterContainer>
  )
}