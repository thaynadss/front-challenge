import * as C from './styles';

export const PaginationButtons = () => {
  return (
    <C.ButtonsContainer>
      <C.PaginationButton width={2.37} color='#FFF' background='#B6116E'>1</C.PaginationButton>
      <C.PaginationButton width={4.56} color='#B6116E' background='#FFF'>2</C.PaginationButton>
      <C.PaginationButton width={2.37} color='#B6116E' background='#FFF'>3</C.PaginationButton>
      <C.NextButton><span>...</span> Próximo &gt;&gt;</C.NextButton>
    </C.ButtonsContainer>
  )
}