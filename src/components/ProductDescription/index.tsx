import { AddProductButtons } from '../AddProductButtons';
import * as C from './styles';

export const ProductDescription = () => {
  let yellowStars: number[] = [];
  let grayStars: number[] = [];
  let rating: number = 4;
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
      <C.TypeCountryRegion color='#C81A78' weight='bold' cursor='pointer'>Estados Unidos<span>&gt;</span></C.TypeCountryRegion>
      <C.TypeCountryRegion color='#888888'>Califórnia</C.TypeCountryRegion>
      <C.ProductTitle>Apothic Red 2019</C.ProductTitle>
      <C.CountryTypeClassSizeRating>
        <img className='flag' src={'https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg'} alt='bandeira do país' /> Estados Unidos
        <span className='sideSpacing'>Tinto</span> Meio Seco/Demi-Sec
        <span className='sideSpacing'>750ml</span>
        {yellowStars.map((item, index) => <img key={index} src={process.env.PUBLIC_URL + '/icons/yellowStar.svg'} alt='avaliação do vinho' />)}
        {grayStars.map((item, index) => <img key={index} src={process.env.PUBLIC_URL + '/icons/grayStar.svg'} alt='avaliação do vinho' />)}
        <span className='rating'>(2)</span>
      </C.CountryTypeClassSizeRating>
      <C.MemberValue><span className='currency'>R$</span><span className='value'>63</span>,67</C.MemberValue>
      <C.NonMemberValue>Não sócio R$ 120,95/UN.</C.NonMemberValue>
      <C.SommelierTitle>Comentário do Sommelier</C.SommelierTitle>
      <C.SommelierComment>Produzido no terroir californiano, esse tinto mescla as variedades Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho inspirado nas antigas Apothecas (adegas subterrâneas), um lugar misterioso onde há mais de 800 anos os viticultores misturavam e armazenavam seus cobiçados vinhos.</C.SommelierComment>
      <AddProductButtons />
    </C.ProdDescripContainer>
  )
}