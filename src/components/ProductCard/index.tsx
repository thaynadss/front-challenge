import { AddCardButton } from '../AddCardButton';
import * as C from './styles';
import { Link } from 'react-router-dom';
import { DisplayCard } from '../../types/Product';

export const ProductCard = ({ img, title, price, discount, memberPrice, nonMemberPrice }: DisplayCard) => {
  return (
    <C.CardContainer>
      <C.DisplayProduct>
        <C.ProductImage src={img} />
        <Link to='/product' style={{ textDecoration: 'none' }}> <C.Title>{title}</C.Title>
        </Link>
        <C.SmallerCardText size={11} color='#888888' decoration='line-through'>R$ {price}
          <C.Porcentage>{discount}% OFF</C.Porcentage>
        </C.SmallerCardText>
        <C.SmallerCardText size={11} color='#1D1D1B' bold='bold'>Sócio Wine
          <C.MemberValue>R$ <span>{memberPrice}</span>,00</C.MemberValue>
        </C.SmallerCardText>
        <C.SmallerCardText size={12} color='#888888'>Não sócio R$ {nonMemberPrice}</C.SmallerCardText>
      </C.DisplayProduct>

      <AddCardButton width={16} height={2.5} size={14} fontStyle='uppercase' />
    </C.CardContainer>
  )
}