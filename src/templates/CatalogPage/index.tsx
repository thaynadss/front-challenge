import { useContext, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartHeaderSearch } from '../../components/CartHeaderSearch';
import { FilterByPrice } from '../../components/FilterByPrice';
import { ProductsDisplay } from '../../components/ProductsDisplay';
import { CatalogContext, CatalogProvider } from '../../contexts/CatalogContext';
import * as C from './styles';

const CatalogPage = () => {
  const [searchClick, setSearchClick] = useState<boolean>(false);
  const [cartClick, setCartClick] = useState<boolean>(false);
  const { searchedText } = useParams();
  const { catalogState: { search }, catalogDispatch } = useContext(CatalogContext);

  const handleSearchClick = (close: boolean) => {
    setSearchClick(close);
  };

  const handleCartClick = (close: boolean) => {
    setCartClick(close);
  };

  useLayoutEffect(() => {
    const handleSearch = () => {
      if (search === '' && searchedText) {
        catalogDispatch({
          type: 'SEARCHED_TEXT',
          payload: `name=${searchedText}`
        })
      }
    };
    handleSearch();
  });

  return (
    <C.PageContainer open={searchClick === false && cartClick === false ? false : true}>
      <CartHeaderSearch searchClick={searchClick} cartClick={cartClick} handleSearchClick={handleSearchClick} handleCartClick={handleCartClick} />
      <C.MainContainer>
        <FilterByPrice />
        <ProductsDisplay />
      </C.MainContainer>
    </C.PageContainer>
  )
}

export default CatalogPage;