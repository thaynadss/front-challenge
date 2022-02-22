import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartHeaderSearch } from 'presentation/components/CartHeaderSearch';
import { ProductDescription } from './components/ProductDescription';
import { useProductContext } from 'presentation/contexts/ProductContext';
import { ProductImage, PageContainer, MainContainer, BackButton } from './styles';

const ProductPage = () => {
  const { item } = useProductContext();
  const [searchClick, setSearchClick] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const [hamburgerClick, setHamburgerClick] = useState(false);
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
    <PageContainer open={(searchClick === false && cartClick === false && hamburgerClick === false) ? false : true}>
      <CartHeaderSearch searchClick={searchClick} cartClick={cartClick} handleSearchClick={handleSearchClick} handleCartClick={handleCartClick} hamburgerClick={hamburgerClick} handleHamburgerClick={handleHamburgerClick} />
      <MainContainer>
        <BackButton onClick={() => navigate(-1)}>
          <span>&lt;</span>
          Voltar</BackButton>
        <ProductImage src={item.image} alt={item.name} />
        <ProductDescription />
      </MainContainer>
    </PageContainer>
  )
}

export default ProductPage;