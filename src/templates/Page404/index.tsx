import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartHeaderSearch } from '../../components/CartHeaderSearch';
import * as C from './styles';

const Page404 = () => {
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
        <Link to='/home' style={{ textDecoration: 'none' }}><C.BackToHomeText>&lt;&lt; VOLTAR PARA A HOME</C.BackToHomeText></Link>
        <C.ErrorName>erro 404</C.ErrorName>
        <C.Title>Opa! A página que você está tentando
          acessar não existe ou não está disponível.
          <C.Image src={process.env.PUBLIC_URL + '/icons/brokenGlass.png'} alt='Imagem de erro' />
        </C.Title>
      </C.MainContainer>
    </C.PageContainer>
  )
}

export default Page404;