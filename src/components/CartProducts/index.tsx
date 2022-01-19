import * as C from './styles';

export const CartProducts = () => {
  return (
    <C.CartCardContainer>
      <C.CardImage src={'https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png'} alt="imagem do vinho" />
      <C.CardTitle>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014
        <C.ProductCountry>Estados Unidos</C.ProductCountry>
      </C.CardTitle>
      <C.IncremDecremButton>
        -
        <C.QuantityInput name='quantity' type='text' value={1} />
        +
      </C.IncremDecremButton>
      <C.ProductValue>
        <span className='currency'>R$</span> 34
        <span className='decimal'>,70</span>
      </C.ProductValue>
      <C.RemoveItem>x</C.RemoveItem>
    </C.CartCardContainer>
  )
}