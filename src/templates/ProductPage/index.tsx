import { useContext, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductDescription } from '../../components/ProductDescription';
import { SearchInput } from '../../components/SearchInput';
import { WineBoxCart } from '../../components/WineBoxCart';
import { ProductContext } from '../../contexts/ProductContext';
import * as C from './styles';

const ProductPage = () => {
  const { item } = useContext(ProductContext);
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
      <Header searchClick={searchClick} cartClick={cartClick} handleSearchClick={handleSearchClick} handleCartClick={handleCartClick} />
      <WineBoxCart cartClick={cartClick} handleCartClick={handleCartClick} />
      <SearchInput search={searchClick} handleSearchClick={handleSearchClick} />
      <C.MainContainer>
        <C.BackButton size={27} padLeft={0.8}>&lt;</C.BackButton>
        <C.BackButton size={20} padTop={0.4} padLeft={1.37}>Voltar</C.BackButton>
        <C.ProductImage src={item.image} alt={item.name} />
        <ProductDescription />
      </C.MainContainer>
    </C.PageContainer>
  )
}

export default ProductPage;