import * as C from './styles';

type Props = {
  width: number;
  height: number;
  size: number;
  fontStyle: string;
}

export const AddCardButton = ({ width, height, size, fontStyle }: Props) => {
  return (
    <C.AddProduct width={width} height={height} size={size} fontStyle={fontStyle}>Adicionar</C.AddProduct>
  )
}