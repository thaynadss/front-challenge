import { useContext, useEffect, useState } from 'react';
import { CatalogContext } from '../../contexts/CatalogContext';
import * as C from './styles';

export const FilterByPrice = () => {
  const [priceSelected, setPriceSelected] = useState<string>('');
  const isPriceSelected = (value: string): boolean => priceSelected === value;
  const { catalogState, catalogDispatch } = useContext(CatalogContext);

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
    <C.FilterContainer>
      <C.FilterTitle>Refine sua busca</C.FilterTitle>
      <C.FilterForm>
        <C.FilterFieldset>
          <C.FilterLegend>Por preço</C.FilterLegend>
          <C.FilterLabel>
            <C.FilterInput type='radio' name='pricefilter' value='0-40' checked={isPriceSelected('0-40')} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> Até R$40
          </C.FilterLabel>

          <C.FilterLabel>
            <C.FilterInput type='radio' name='pricefilter' value='40-60' checked={isPriceSelected('40-60')} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> R$40 a R$60
          </C.FilterLabel>

          <C.FilterLabel>
            <C.FilterInput type='radio' name='pricefilter' value='100-200' checked={isPriceSelected('100-200')} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> R$100 a R$200
          </C.FilterLabel>

          <C.FilterLabel>
            <C.FilterInput type='radio' name='pricefilter' value='200-500' checked={isPriceSelected('200-500')} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> R$200 a R$500
          </C.FilterLabel>

          <C.FilterLabel>
            <C.FilterInput type='radio' name='pricefilter' value='500-1000000' checked={isPriceSelected('500-1000000')} onChange={(e) => setPriceSelected(e.currentTarget.value)} /> Acima de R$500
          </C.FilterLabel>

        </C.FilterFieldset>
      </C.FilterForm>

      <C.ClearSelection onClick={() => setPriceSelected('')}>Limpar filtro</C.ClearSelection>
    </C.FilterContainer>
  )
}