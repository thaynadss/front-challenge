import * as C from './styles';

type Props = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

export const PaginationButtons = ({ totalPages, currentPage, setCurrentPage }: Props) => {
  return (
    <C.ButtonsContainer total={totalPages}>
      <C.PaginationButton width={2.37} >1</C.PaginationButton>
      <C.PaginationButton width={4.56} >2</C.PaginationButton>
      <C.PaginationButton width={2.37} >3</C.PaginationButton>
      <C.NextButton><span>...</span> Próximo &gt;&gt;</C.NextButton>
    </C.ButtonsContainer >
  )
}

/*
      {page !== 1 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className={classNames([styles.pageItem, styles.sides].join(' '))}
          >
            &lt;
          </button>
        )}
        <button
          onClick={() => handlePagination(1)}
          type="button"
          className={classNames(styles.pageItem, {
            [styles.active]: page === 1,
          })}
        >
          {1}
        </button>
        {page > 3 && <div className={styles.separator}>...</div>}
        {page === totalPages && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page - 2)}
            type="button"
            className={styles.pageItem}
          >
            {page - 2}
          </button>
        )}
        {page > 2 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className={styles.pageItem}
          >
            {page - 1}
          </button>
        )}
        {page !== 1 && page !== totalPages && (
          <button
            onClick={() => handlePagination(page)}
            type="button"
            className={[styles.pageItem, styles.active].join(' ')}
          >
            {page}
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className={styles.pageItem}
          >
            {page + 1}
          </button>
        )}
        {page === 1 && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page + 2)}
            type="button"
            className={styles.pageItem}
          >
            {page + 2}
          </button>
        )}
        {page < totalPages - 2 && <div className={styles.separator}>...</div>}
        <button
          onClick={() => handlePagination(totalPages)}
          type="button"
          className={classNames(styles.pageItem, {
            [styles.active]: page === totalPages,
          })}
        >
          {totalPages}
        </button>
        {page !== totalPages && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className={[styles.pageItem, styles.sides].join(' ')}
          >
            &gt;
          </button>
        )}
*/

// actual page -> width e color
// page 3 -> width padrão
// se tiver só 2 páginas