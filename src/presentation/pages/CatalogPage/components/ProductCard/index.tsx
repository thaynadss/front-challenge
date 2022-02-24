import {
  Title,
  SmallerCardText,
  ProductImage,
  Porcentage,
  MemberValue,
  DisplayProduct,
  CardContainer,
  AddProductButton,
  CardLink
} from './styles';
import { priceFormat, integerFormat, decimalFormat, currencyFormat } from 'presentation/helpers/priceFormat';
import { Product } from 'types/Product';
import { useCartContext } from 'presentation/contexts/CartContext';
import { useProductContext } from 'presentation/contexts/ProductContext';
import { themeColors } from 'presentation/styles/themeColors'

type Props = {
  item: Product;
};

export const ProductCard = ({ item }: Props) => {
  const { handleCheckItemInCart } = useCartContext();
  const { handleProductPage } = useProductContext();

  return (
    <CardContainer>
      <DisplayProduct>
        <CardLink to={`/product/${item.id}`}>
          <ProductImage src={item.image} alt={item.name} onClick={() => handleProductPage(item)} />
          <Title onClick={() => handleProductPage(item)}>{item.name}</Title>
        </CardLink>
        <SmallerCardText size={11} color={themeColors.text.gray4} decoration='line-through'>{priceFormat(item.price)}
          <Porcentage>{item.discount}% OFF</Porcentage>
        </SmallerCardText>
        <SmallerCardText size={11} color={themeColors.text.gray8} bold='bold'>Sócio Wine
          <MemberValue>{currencyFormat}<span>{integerFormat(item.priceMember)}</span>{decimalFormat(item.priceMember)}</MemberValue>
        </SmallerCardText>
        <SmallerCardText size={12} color={themeColors.text.gray4}>Não sócio {priceFormat(item.priceNonMember)}</SmallerCardText>
      </DisplayProduct>

      <AddProductButton width={16} height={2.5} size={14} onClick={() => handleCheckItemInCart({ id: item.id, image: item.image, name: item.name, country: item.country, price: item.priceMember, quantity: 1 })}>ADICIONAR</AddProductButton>
    </CardContainer>
  )
}