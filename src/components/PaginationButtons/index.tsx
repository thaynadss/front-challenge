import { useState } from 'react';
import * as C from './styles';

type Props = {
  page: number;
  totalPages: number;
}

export const PaginationButtons = ({ page, totalPages }: Props) => {
  const [firstButton, setFirstButton] = useState<number>();
  const [secondButton, setSecondButton] = useState<number>();

  const handlePage = (page: number, totalPages: number) => {

  }

  return (
    <C.ButtonsContainer>
      <C.PaginationButton width={2.37} >{firstButton}</C.PaginationButton>
      <C.PaginationButton width={4.56} >{secondButton}</C.PaginationButton>
      <C.PaginationButton width={2.37} >3</C.PaginationButton>
      <C.NextButton><span>...</span> Próximo &gt;&gt;</C.NextButton>
    </C.ButtonsContainer >
  )
}
//{handlePage(page, totalPages)}

// actual page -> width e color
// page 3 -> width padrão
// se tiver só 1 ou 2 páginas