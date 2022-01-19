import { AddCardButton } from '../AddCardButton';
import * as C from './styles';
import { Link } from 'react-router-dom';

export const ProductCard = () => {
  return (
    <C.CardContainer>
      <C.DisplayProduct>
        <C.ProductImage src={'https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png'} />
        <Link to='/product' style={{ textDecoration: 'none' }}> <C.Title>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</C.Title>
        </Link>
        <C.SmallerCardText size={11} color='#888888' decoration='line-through'>R$ 37,40
          <C.Porcentage>60% OFF</C.Porcentage>
        </C.SmallerCardText>
        <C.SmallerCardText size={11} color='#1D1D1B' bold='bold'>Sócio Wine
          <C.MemberValue>R$ <span>30</span>,00</C.MemberValue>
        </C.SmallerCardText>
        <C.SmallerCardText size={12} color='#888888'>Não sócio R$ 37,40</C.SmallerCardText>
      </C.DisplayProduct>

      <AddCardButton width={16} height={2.5} size={14} fontStyle='uppercase' />
    </C.CardContainer>
  )
}