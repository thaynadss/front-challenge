import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartHeaderSearch } from 'presentation/components/CartHeaderSearch';
import { Title, PageContainer, MainContainer, Image, ErrorName, BackToHomeText } from './styles';

const Page404 = () => {
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
        <Link to='/home' style={{ textDecoration: 'none' }}><BackToHomeText>&lt;&lt; VOLTAR PARA A HOME</BackToHomeText></Link>
        <ErrorName>erro 404</ErrorName>
        <Title>Opa! A página que você está tentando
          acessar não existe ou não está disponível.
          <Image src={process.env.PUBLIC_URL + '/icons/brokenGlass.png'} alt='Imagem de erro' />
        </Title>
      </MainContainer>
    </PageContainer>
  )
}

export default Page404;