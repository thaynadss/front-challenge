import { useContext } from 'react';
import { Header } from '../../components/Header';
import { ProductDescription } from '../../components/ProductDescription';
import { ProductContext } from '../../contexts/ProductContext';
import * as C from './styles';

const ProductPage = () => {
  const { item } = useContext(ProductContext);

  return (
    <C.PageContainer>
      <Header />

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