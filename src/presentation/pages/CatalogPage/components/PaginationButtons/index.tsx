import { PrevNextButton, PaginationButton, ButtonsContainer } from './styles';

type Props = {
  totalPages: number;
  currentPage: number;
  handleCurrentPage: (value: number) => void;
}

export const PaginationButtons = ({ totalPages, currentPage, handleCurrentPage }: Props) => {
  return (
    <ButtonsContainer total={totalPages}>
      {currentPage !== 1 &&
        <PrevNextButton onClick={() => handleCurrentPage(currentPage - 1)}>&lt;&lt; Anterior</PrevNextButton>}

      <PaginationButton currentPage={currentPage === 1 ? true : false} onClick={() => handleCurrentPage(1)}>1</PaginationButton>

      {currentPage > 3 && totalPages !== 4 && <span className='separator'>...</span>}

      {currentPage === totalPages && totalPages > 3 && <PaginationButton onClick={() => handleCurrentPage(currentPage - 2)}>{currentPage - 2}</PaginationButton>}

      {currentPage > 2 && <PaginationButton onClick={() => handleCurrentPage(currentPage - 1)}>{currentPage - 1}</PaginationButton>}

      {currentPage !== 1 && currentPage !== totalPages && <PaginationButton currentPage={true} onClick={() => handleCurrentPage(currentPage)}>{currentPage}</PaginationButton>}

      {currentPage < totalPages - 1 && <PaginationButton nextPage={true} onClick={() => handleCurrentPage(currentPage + 1)}>{currentPage + 1}</PaginationButton>}

      {currentPage === 1 && totalPages > 3 && <PaginationButton onClick={() => handleCurrentPage(currentPage + 2)}>{currentPage + 2}</PaginationButton>}

      {currentPage < totalPages - 2 && <span className='separator'>...</span>}

      <PaginationButton nextPage={currentPage === 1 && totalPages === 2 ? true : false} currentPage={currentPage === totalPages ? true : false} onClick={() => handleCurrentPage(totalPages)}>{totalPages}</PaginationButton>

      {currentPage !== totalPages && <PrevNextButton onClick={() => handleCurrentPage(currentPage + 1)}>Próxima &gt;&gt;</PrevNextButton>}

    </ButtonsContainer >
  )
};