import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { AddProdBtn } from '../AddProdBtn';
import * as C from './styles';
import * as P from '../../helpers/priceFormat';
import { CartContext } from '../../contexts/CartContext';
import { AddProductButton } from '../ProductCard/styles';

export const ProductDescription = () => {
  const { item } = useContext(ProductContext);
  const { handleCheckItemInCart } = useContext(CartContext);

  let yellowStars: number[] = [];
  let grayStars: number[] = [];
  let rating: number = item.rating;
  let nonRating: number = (5 - rating);

  for (let i = 0; i < rating; i++) {
    yellowStars.push(i);
  }

  for (let i = 0; i < nonRating; i++) {
    grayStars.push(i);
  }

  const handleAddToCart = (qty: number) => {
    handleCheckItemInCart({ id: item.id, image: item.image, name: item.name, country: item.country, price: item.priceMember, quantity: qty })
  }

  return (
    <C.ProdDescripContainer>
      <C.TypeCountryRegion color='#C81A78' weight='bold' cursor='pointer'>Vinhos<span>&gt;</span></C.TypeCountryRegion>
      <C.TypeCountryRegion color='#C81A78' weight='bold' cursor='pointer'>{item.country}<span>&gt;</span></C.TypeCountryRegion>
      <C.TypeCountryRegion color='#888888'>{item.region}</C.TypeCountryRegion>
      <C.ProductTitle>{item.name}</C.ProductTitle>
      <C.CountryTypeClassSizeRating>
        <img className='flag' src={item.flag} alt={item.country} /> {item.country}
        <span className='sideSpacing'>{item.type}</span> Meio Seco/Demi-Sec
        <span className='sideSpacing'>{item.size}</span>
        {yellowStars.map((_, index) => <img key={index} src={process.env.PUBLIC_URL + '/icons/yellowStar.svg'} alt='Avaliação do vinho' />)}
        {grayStars.map((_, index) => <img key={index} src={process.env.PUBLIC_URL + '/icons/grayStar.svg'} alt='Avaliação do vinho' />)}
        <span className='rating'>({item.rating})</span>
      </C.CountryTypeClassSizeRating>
      <C.ProductImage src={item.image} alt={item.name} />
      <C.MemberValue large={true} small={false}><span className='currency'>{P.currencyFormat}</span><span className='value'>{P.integerFormat(item.priceMember)}</span>{P.decimalFormat(item.priceMember)}</C.MemberValue>
      <C.NonMemberValue>Não sócio {P.priceFormat(item.priceNonMember)}/UN.</C.NonMemberValue>
      <C.SommelierTitle>Comentário do Sommelier</C.SommelierTitle>
      <C.SommelierComment>{item.sommelierComment}</C.SommelierComment>
      <AddProdBtn handleAddToCart={handleAddToCart} />
      <C.FooterContainer>
        <C.MemberValue large={false} small={true}><span className='currency'>{P.currencyFormat}</span><span className='value'>{P.integerFormat(item.priceMember)}</span>{P.decimalFormat(item.priceMember)}</C.MemberValue>
        <AddProductButton width={14} height={3} size={16} onClick={() => handleCheckItemInCart({ id: item.id, image: item.image, name: item.name, country: item.country, price: item.priceMember, quantity: 1 })}>Adicionar</AddProductButton>
      </C.FooterContainer>
    </C.ProdDescripContainer >
  )
}