import * as C from './styles';

type Props = {
  totalPages: number;
  currentPage: number;
  handleCurrentPage: (value: number) => void;
}

export const PaginationButtons = ({ totalPages, currentPage, handleCurrentPage }: Props) => {
  return (
    <C.ButtonsContainer total={totalPages}>
      {currentPage !== 1 &&
        <C.PrevNextButton onClick={() => handleCurrentPage(currentPage - 1)}>&lt;&lt; Anterior</C.PrevNextButton>}

      <C.PaginationButton currentPage={currentPage === 1 ? true : false} onClick={() => handleCurrentPage(1)}>1</C.PaginationButton>

      {currentPage > 3 && totalPages !== 4 && <span className='separator'>...</span>}

      {currentPage === totalPages && totalPages > 3 && <C.PaginationButton onClick={() => handleCurrentPage(currentPage - 2)}>{currentPage - 2}</C.PaginationButton>}

      {currentPage > 2 && <C.PaginationButton onClick={() => handleCurrentPage(currentPage - 1)}>{currentPage - 1}</C.PaginationButton>}

      {currentPage !== 1 && currentPage !== totalPages && <C.PaginationButton currentPage={true} onClick={() => handleCurrentPage(currentPage)}>{currentPage}</C.PaginationButton>}

      {currentPage < totalPages - 1 && <C.PaginationButton nextPage={true} onClick={() => handleCurrentPage(currentPage + 1)}>{currentPage + 1}</C.PaginationButton>}

      {currentPage === 1 && totalPages > 3 && <C.PaginationButton onClick={() => handleCurrentPage(currentPage + 2)}>{currentPage + 2}</C.PaginationButton>}

      {currentPage < totalPages - 2 && <span className='separator'>...</span>}

      <C.PaginationButton nextPage={currentPage === 1 && totalPages === 2 ? true : false} currentPage={currentPage === totalPages ? true : false} onClick={() => handleCurrentPage(totalPages)}>{totalPages}</C.PaginationButton>

      {currentPage !== totalPages && <C.PrevNextButton onClick={() => handleCurrentPage(currentPage + 1)}>Próxima &gt;&gt;</C.PrevNextButton>}

    </C.ButtonsContainer >
  )
};