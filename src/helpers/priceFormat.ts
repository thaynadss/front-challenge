export const priceFormat = (price: number) => {
  let newValue = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return newValue;
}

export const currencyFormat = () => {
  return 'R$';
}

export const integerFormat = (price: number) => {
  let integer = priceFormat(price).slice(3).split(',');

  return integer[0];
}

export const decimalFormat = (price: number) => {
  let decimal = priceFormat(price).split(',');

  return `,${decimal[1]}`;
}


