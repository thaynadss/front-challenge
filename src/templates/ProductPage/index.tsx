import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartHeaderSearch } from '../../components/CartHeaderSearch';
import { ProductDescription } from '../../components/ProductDescription';
import { ProductContext } from '../../contexts/ProductContext';
import * as C from './styles';

const ProductPage = () => {
  const { item } = useContext(ProductContext);
  const [searchClick, setSearchClick] = useState<boolean>(false);
  const [cartClick, setCartClick] = useState<boolean>(false);
  const [hamburgerClick, setHamburgerClick] = useState<boolean>(false);
  const navigate = useNavigate();

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
        <C.BackButton size={27} padLeft={0.8} onClick={() => navigate(-1)}>&lt;</C.BackButton>
        <C.BackButton size={20} padTop={0.4} padLeft={1.37} onClick={() => navigate(-1)}>Voltar</C.BackButton>
        <C.ProductImage src={item.image} alt={item.name} />
        <ProductDescription />
      </C.MainContainer>
    </C.PageContainer>
  )
}

export default ProductPage;