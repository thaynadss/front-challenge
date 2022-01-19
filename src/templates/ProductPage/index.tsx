import { Header } from '../../components/Header';
import { ProductDescription } from '../../components/ProductDescription';
import * as C from './styles';

const ProductPage = () => {
  return (
    <C.PageContainer>
      <Header />

      <C.MainContainer>
        <C.BackButton size={27} padLeft={0.8}>&lt;</C.BackButton>
        <C.BackButton size={20} padTop={0.4} padLeft={1.37}>Voltar</C.BackButton>
        <C.ProductImage src={'https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png'} alt='imagem do vinho' />
        <ProductDescription />
      </C.MainContainer>
    </C.PageContainer>
  )
}

export default ProductPage;