import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { AddProductButtons } from '../AddProductButtons';
import * as C from './styles';
import * as P from '../../helpers/priceFormat';

export const ProductDescription = () => {
  const { item } = useContext(ProductContext);

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
        {yellowStars.map((item, index) => <img key={index} src={process.env.PUBLIC_URL + '/icons/yellowStar.svg'} alt='Avaliação do vinho' />)}
        {grayStars.map((item, index) => <img key={index} src={process.env.PUBLIC_URL + '/icons/grayStar.svg'} alt='Avaliação do vinho' />)}
        <span className='rating'>({item.rating})</span>
      </C.CountryTypeClassSizeRating>
      <C.MemberValue><span className='currency'>{P.currencyFormat}</span><span className='value'>{P.integerFormat(item.priceMember)}</span>{P.decimalFormat(item.priceMember)}</C.MemberValue>
      <C.NonMemberValue>Não sócio {P.priceFormat(item.priceNonMember)}/UN.</C.NonMemberValue>
      <C.SommelierTitle>Comentário do Sommelier</C.SommelierTitle>
      <C.SommelierComment>{item.sommerlierComment}</C.SommelierComment>
      <AddProductButtons />
    </C.ProdDescripContainer>
  )
}