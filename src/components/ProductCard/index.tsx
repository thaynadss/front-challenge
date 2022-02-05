import * as C from './styles';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import * as P from '../../helpers/priceFormat';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';

type Props = {
  item: Product;
}

export const ProductCard = ({ item }: Props) => {
  const { handleCheckItemInCart } = useContext(CartContext);
  const { handlePageProduct } = useContext(ProductContext);

  return (
    <C.CardContainer>
      <C.DisplayProduct>
        <C.ProductImage src={item.image} alt={item.name} />
        <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }} onClick={() => handlePageProduct(item)}> <C.Title>{item.name}</C.Title>
        </Link>
        <C.SmallerCardText size={11} color='#888888' decoration='line-through'>{P.priceFormat(item.price)}
          <C.Porcentage>{item.discount}% OFF</C.Porcentage>
        </C.SmallerCardText>
        <C.SmallerCardText size={11} color='#1D1D1B' bold='bold'>Sócio Wine
          <C.MemberValue>{P.currencyFormat}<span>{P.integerFormat(item.priceMember)}</span>{P.decimalFormat(item.priceMember)}</C.MemberValue>
        </C.SmallerCardText>
        <C.SmallerCardText size={12} color='#888888'>Não sócio {P.priceFormat(item.priceNonMember)}</C.SmallerCardText>
      </C.DisplayProduct>

      <C.AddProductButton width={16} height={2.5} size={14} onClick={() => handleCheckItemInCart({ id: item.id, image: item.image, name: item.name, country: item.country, price: item.priceMember, quantity: 1 })}> ADICIONAR</C.AddProductButton>
    </C.CardContainer>
  )
}