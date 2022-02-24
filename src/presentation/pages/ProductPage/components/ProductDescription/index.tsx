import {
  TypeCountryRegion,
  SommelierTitle,
  SommelierComment,
  ProductTitle,
  ProductImage,
  ProdDescripContainer,
  NonMemberValue,
  MemberValue,
  FooterContainer,
  CountryTypeClassSizeRating
} from './styles';
import { priceFormat, integerFormat, decimalFormat, currencyFormat } from 'presentation/helpers/priceFormat';
import { AddProductButton } from 'presentation/pages/CatalogPage/components/ProductCard/styles';
import { useProductContext } from 'presentation/contexts/ProductContext';
import { useCartContext } from 'presentation/contexts/CartContext';
import { themeColors } from 'presentation/styles/themeColors';
import { starsLength } from './starsLength';
import { AddProdBtn } from '../AddProdBtn';

export const ProductDescription = () => {
  const { item } = useProductContext();
  const { handleCheckItemInCart } = useCartContext();
  const { yellowStars, grayStars } = starsLength(item.rating);

  const handleAddToCart = (qty: number) => {
    handleCheckItemInCart({ id: item.id, image: item.image, name: item.name, country: item.country, price: item.priceMember, quantity: qty })
  };

  return (
    <ProdDescripContainer>
      <TypeCountryRegion color={themeColors.text.pink2} weight='bold' cursor='pointer'>Vinhos<span>&gt;</span></TypeCountryRegion>
      <TypeCountryRegion color={themeColors.text.pink2} weight='bold' cursor='pointer'>{item.country}<span>&gt;</span></TypeCountryRegion>
      <TypeCountryRegion color={themeColors.text.gray4}>{item.region}</TypeCountryRegion>
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
        <AddProductButton width={14} height={3} size={16} onClick={() => handleAddToCart(1)}>Adicionar</AddProductButton>
      </FooterContainer>
    </ProdDescripContainer >
  )
}