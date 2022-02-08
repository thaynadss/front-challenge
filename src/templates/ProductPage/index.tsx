import { useContext, useState } from 'react';
import { CartHeaderSearch } from '../../components/CartHeaderSearch';
import { ProductDescription } from '../../components/ProductDescription';
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
      <CartHeaderSearch searchClick={searchClick} cartClick={cartClick} handleSearchClick={handleSearchClick} handleCartClick={handleCartClick} />
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