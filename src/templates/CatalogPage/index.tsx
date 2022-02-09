import { useState } from 'react';
import { CartHeaderSearch } from '../../components/CartHeaderSearch';
import { FilterByPrice } from '../../components/FilterByPrice';
import { ProductsDisplay } from '../../components/ProductsDisplay';
import * as C from './styles';

const CatalogPage = () => {
  const [searchClick, setSearchClick] = useState<boolean>(false);
  const [cartClick, setCartClick] = useState<boolean>(false);
  const [hamburgerClick, setHamburgerClick] = useState<boolean>(false);

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
    <C.PageContainer open={(searchClick === false && cartClick === false && hamburgerClick === false) ? false : true}>
      <CartHeaderSearch searchClick={searchClick} cartClick={cartClick} handleSearchClick={handleSearchClick} handleCartClick={handleCartClick} hamburgerClick={hamburgerClick} handleHamburgerClick={handleHamburgerClick} />
      <C.MainContainer>
        <FilterByPrice />
        <ProductsDisplay />
      </C.MainContainer>
    </C.PageContainer>
  )
}

export default CatalogPage;