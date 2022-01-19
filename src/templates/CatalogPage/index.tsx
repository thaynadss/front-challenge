import { FilterByPrice } from '../../components/FilterByPrice';
import { Header } from '../../components/Header';
import { ProductsDisplay } from '../../components/ProductsDisplay';
import * as C from './styles';

const CatalogPage = () => {
  return (
    <C.PageContainer>
      <Header />

      <C.MainContainer>
        <FilterByPrice />
        <ProductsDisplay />
      </C.MainContainer>

    </C.PageContainer>
  )
}

export default CatalogPage;