import { FilterByPrice } from '../../components/FilterByPrice';
import { Header } from '../../components/Header';
import { ProductsDisplay } from '../../components/ProductsDisplay';
import { CatalogProvider } from '../../contexts/CatalogContext';
import * as C from './styles';

const CatalogPage = () => {
  return (
    <C.PageContainer>
      <CatalogProvider>
        <Header />
        <C.MainContainer>
          <FilterByPrice />
          <ProductsDisplay />
        </C.MainContainer>
      </CatalogProvider>
    </C.PageContainer>
  )
}

export default CatalogPage;