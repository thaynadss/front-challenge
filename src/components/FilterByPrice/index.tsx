import { ChangeEvent, useState } from 'react';
import * as C from './styles';

export const FilterByPrice = () => {
  const [priceSelected, setPriceSelected] = useState('');

  const isPriceSelected = (value: string): boolean => priceSelected === value;

  const handlePriceFilter = (e: ChangeEvent<HTMLInputElement>): void => setPriceSelected(e.currentTarget.value);

  return (
    <C.FilterContainer>
      <C.FilterTitle>Refine sua busca</C.FilterTitle>
      <C.FilterForm>
        <C.FilterFieldset>
          <C.FilterLegend>Por preço</C.FilterLegend>
          <C.FilterLabel>
            <C.FilterInput type='radio' name='pricefilter' value='until40' checked={isPriceSelected('until40')} onChange={handlePriceFilter} /> Até R$40
          </C.FilterLabel>

          <C.FilterLabel>
            <C.FilterInput type='radio' name='pricefilter' value='between40n60' checked={isPriceSelected('between40n60')} onChange={handlePriceFilter} /> R$40 a R$60
          </C.FilterLabel>

          <C.FilterLabel>
            <C.FilterInput type='radio' name='pricefilter' value='between100n200' checked={isPriceSelected('between100n200')} onChange={handlePriceFilter} /> R$100 a R$200
          </C.FilterLabel>

          <C.FilterLabel>
            <C.FilterInput type='radio' name='pricefilter' value='between200n500' checked={isPriceSelected('between200n500')} onChange={handlePriceFilter} /> R$200 a R$500
          </C.FilterLabel>

          <C.FilterLabel>
            <C.FilterInput type='radio' name='pricefilter' value='over500' checked={isPriceSelected('over500')} onChange={handlePriceFilter} /> Acima de R$500
          </C.FilterLabel>

        </C.FilterFieldset>
      </C.FilterForm>
    </C.FilterContainer>
  )
}