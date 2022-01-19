import { PaginationButtons } from '../PaginationButtons';
import { ProductCard } from '../ProductCard';
import * as C from './styles';

export const ProductsDisplay = () => {
  return (
    <C.DisplayContainer>
      <C.QuantityProducts><span>49</span> produtos encontrados</C.QuantityProducts>
      <C.CardsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </C.CardsContainer>
      <PaginationButtons />
    </C.DisplayContainer>
  )
}