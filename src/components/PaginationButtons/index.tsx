import { useState } from 'react';
import * as C from './styles';

type Props = {
  totalPages: number;
}

export const PaginationButtons = ({ totalPages }: Props) => {
  const [secondButton, setSecondButton] = useState<number>();
  const [thirdButton, setThirdButton] = useState<number>();

  const handlePageNumber = (page: number, totalPages: number) => {

  }

  return (
    <C.ButtonsContainer total={totalPages}>
      <C.PaginationButton width={2.37} >1</C.PaginationButton>
      <C.PaginationButton width={4.56} >2</C.PaginationButton>
      <C.PaginationButton width={2.37} >3</C.PaginationButton>
      <C.NextButton><span>...</span> Próximo &gt;&gt;</C.NextButton>
    </C.ButtonsContainer >
  )
}

// actual page -> width e color
// page 3 -> width padrão
// se tiver só 2 páginas