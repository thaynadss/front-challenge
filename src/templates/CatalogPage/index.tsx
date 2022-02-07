import { useState } from 'react';
import { FilterByPrice } from '../../components/FilterByPrice';
import { Header } from '../../components/Header';
import { ProductsDisplay } from '../../components/ProductsDisplay';
import { SearchInput } from '../../components/SearchInput';
import { WineBoxCart } from '../../components/WineBoxCart';
import { CatalogProvider } from '../../contexts/CatalogContext';
import * as C from './styles';

const CatalogPage = () => {
  const [searchClick, setSearchClick] = useState<boolean>(false);
  const [cartClick, setCartClick] = useState<boolean>(false);

  const handleSearchClick = (close: boolean) => {
    setSearchClick(close);
  };

  const handleCartClick = (close: boolean) => {
    setCartClick(close);
  };

  return (
    <C.PageContainer open={searchClick === false && cartClick === false ? false : true}>
      <CatalogProvider>
        <Header searchClick={searchClick} cartClick={cartClick} handleSearchClick={handleSearchClick} handleCartClick={handleCartClick} />
        <WineBoxCart cartClick={cartClick} handleCartClick={handleCartClick} />
        <SearchInput search={searchClick} handleSearchClick={handleSearchClick} />
        <C.MainContainer>
          <FilterByPrice />
          <ProductsDisplay />
        </C.MainContainer>
      </CatalogProvider>
    </C.PageContainer>
  )
}

export default CatalogPage;