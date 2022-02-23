import { Buttons } from './styles';

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  handleCurrentPage: (value: number) => void;
};

export const PaginationButtons = ({ totalPages, currentPage, handleCurrentPage }: PaginationProps) => {
  const { ButtonsContainer, PreviousButton, NextButton, PageOneButton, LeftSeparator, SecondButton, PreviousPageButton, CurrentPageButton, NextPageButton, PageThreeButton, RightSeparator, LastPageButton } = Buttons({ totalPages: totalPages, currentPage: currentPage })

  return (
    <ButtonsContainer >
      <PreviousButton onClick={() => handleCurrentPage(currentPage - 1)}>&lt;&lt; Anterior</PreviousButton>

      <PageOneButton onClick={() => handleCurrentPage(1)}>1</PageOneButton>

      <LeftSeparator >...</LeftSeparator>

      <SecondButton onClick={() => handleCurrentPage(currentPage - 2)}>{currentPage - 2}</SecondButton>

      <PreviousPageButton onClick={() => handleCurrentPage(currentPage - 1)}>{currentPage - 1}</PreviousPageButton>

      <CurrentPageButton onClick={() => handleCurrentPage(currentPage)}>{currentPage}</CurrentPageButton>

      <NextPageButton onClick={() => handleCurrentPage(currentPage + 1)}>{currentPage + 1}</NextPageButton>

      <PageThreeButton onClick={() => handleCurrentPage(currentPage + 2)}>{currentPage + 2}</PageThreeButton>

      <RightSeparator>...</RightSeparator>

      <LastPageButton onClick={() => handleCurrentPage(totalPages)}>{totalPages}</LastPageButton>

      <NextButton onClick={() => handleCurrentPage(currentPage + 1)}>Próxima &gt;&gt;</NextButton>
    </ButtonsContainer >
  )
};