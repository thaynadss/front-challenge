import { useProductContext } from 'presentation/contexts/ProductContext';
import { AddProdBtn } from '../AddProdBtn';
import { TypeCountryRegion, SommelierTitle, SommelierComment, ProductTitle, ProductImage, ProdDescripContainer, NonMemberValue, MemberValue, FooterContainer, CountryTypeClassSizeRating } from './styles';
import { priceFormat, integerFormat, decimalFormat, currencyFormat } from 'presentation/helpers/priceFormat';
import { useCartContext } from 'presentation/contexts/CartContext';
import { AddProductButton } from 'presentation/pages/CatalogPage/components/ProductCard/styles';

export const ProductDescription = () => {
  const { item } = useProductContext();
  const { handleCheckItemInCart } = useCartContext();

  let yellowStars: number[] = [];
  let grayStars: number[] = [];
  let rating = item.rating;
  let nonRating = (5 - rating);

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
    <ProdDescripContainer>
      <TypeCountryRegion color='#C81A78' weight='bold' cursor='pointer'>Vinhos<span>&gt;</span></TypeCountryRegion>
      <TypeCountryRegion color='#C81A78' weight='bold' cursor='pointer'>{item.country}<span>&gt;</span></TypeCountryRegion>
      <TypeCountryRegion color='#888888'>{item.region}</TypeCountryRegion>
      <ProductTitle>{item.name}</ProductTitle>
      <CountryTypeClassSizeRating>
        <img className='flag' src={item.flag} alt={item.country} /> {item.country}
        <span className='sideSpacing'>{item.type}</span> Meio Seco/Demi-Sec
        <span className='sideSpacing'>{item.size}</span>
        {yellowStars.map((_, index) => <img key={index} src={process.env.PUBLIC_URL + '/icons/yellowStar.svg'} alt='Avaliação do vinho' />)}
        {grayStars.map((_, index) => <img key={index} src={process.env.PUBLIC_URL + '/icons/grayStar.svg'} alt='Avaliação do vinho' />)}
        <span className='rating'>({item.rating})</span>
      </CountryTypeClassSizeRating>
      <ProductImage src={item.image} alt={item.name} />
      <MemberValue large={true} small={false}><span className='currency'>{currencyFormat}</span><span className='value'>{integerFormat(item.priceMember)}</span>{decimalFormat(item.priceMember)}</MemberValue>
      <NonMemberValue>Não sócio {priceFormat(item.priceNonMember)}/UN.</NonMemberValue>
      <SommelierTitle>Comentário do Sommelier</SommelierTitle>
      <SommelierComment>{item.sommelierComment}</SommelierComment>
      <AddProdBtn handleAddToCart={handleAddToCart} />
      <FooterContainer>
        <MemberValue large={false} small={true}><span className='currency'>{currencyFormat}</span><span className='value'>{integerFormat(item.priceMember)}</span>{decimalFormat(item.priceMember)}</MemberValue>
        <AddProductButton width={14} height={3} size={16} onClick={() => handleCheckItemInCart({ id: item.id, image: item.image, name: item.name, country: item.country, price: item.priceMember, quantity: 1 })}>Adicionar</AddProductButton>
      </FooterContainer>
    </ProdDescripContainer >
  )
}