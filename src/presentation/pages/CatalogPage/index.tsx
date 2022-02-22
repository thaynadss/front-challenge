import { useState } from 'react';
import { CartHeaderSearch } from 'presentation/components/CartHeaderSearch';
import { FilterByPrice } from './components/FilterByPrice';
import { ProductsDisplay } from './components/ProductsDisplay';
import { PageContainer, MainContainer } from './styles';

const CatalogPage = () => {
  const [searchClick, setSearchClick] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const [hamburgerClick, setHamburgerClick] = useState(false);

  const handleSearchClick = (close: boolean) => {
    setSearchClick(close);
  };

  const handleCartClick = (close: boolean) => {
    setCartClick(close);
  };

  const handleHamburgerClick = (close: boolean) => {
    setHamburgerClick(close);
  };

  return (
    <PageContainer open={(searchClick === false && cartClick === false && hamburgerClick === false) ? false : true}>
      <CartHeaderSearch searchClick={searchClick} cartClick={cartClick} handleSearchClick={handleSearchClick} handleCartClick={handleCartClick} hamburgerClick={hamburgerClick} handleHamburgerClick={handleHamburgerClick} />
      <MainContainer>
        <FilterByPrice />
        <ProductsDisplay />
      </MainContainer>
    </PageContainer>
  )
}

export default CatalogPage;