import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import * as C from './styles';

const Page404 = () => {
  return (
    <C.PageContainer>
      <Header />
      <C.MainContainer>
        <Link to='/' style={{ textDecoration: 'none' }}><C.BackToHomeText>&lt;&lt; VOLTAR PARA A HOME</C.BackToHomeText></Link>
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