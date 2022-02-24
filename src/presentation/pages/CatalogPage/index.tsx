import { useState } from 'react';
import { CartHeaderSearch } from 'presentation/components/CartHeaderSearch';
import { FilterByPrice } from './components/FilterByPrice';
import { ProductsDisplay } from './components/ProductsDisplay';
import { PageContainer, MainContainer } from './styles';

const CatalogPage = () => {
  const [isSearchClick, setIsSearchClick] = useState(false);
  const [isCartClick, setIsCartClick] = useState(false);
  const [isHamburgerClick, setIsHamburgerClick] = useState(false);

  const handleIsSearchClick = (close: boolean) => {
    setIsSearchClick(close);
  };

  const handleIsCartClick = (close: boolean) => {
    setIsCartClick(close);
  };

  const handleIsHamburgerClick = (close: boolean) => {
    setIsHamburgerClick(close);
  };

  return (
    <PageContainer closed={!isSearchClick && !isCartClick && !isHamburgerClick}>
      <CartHeaderSearch isSearchClick={isSearchClick} isCartClick={isCartClick} handleIsSearchClick={handleIsSearchClick} handleIsCartClick={handleIsCartClick} isHamburgerClick={isHamburgerClick} handleIsHamburgerClick={handleIsHamburgerClick} />
      <MainContainer>
        <FilterByPrice />
        <ProductsDisplay />
      </MainContainer>
    </PageContainer>
  )
}

export default CatalogPage;