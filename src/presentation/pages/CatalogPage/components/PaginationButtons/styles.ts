import { themeColors } from 'presentation/styles/themeColors';
import styled from 'styled-components';
import { PaginationProps } from '.';

type CurrentAndTotalPages = Omit<PaginationProps, 'handleCurrentPage'>;

export const Buttons = ({ totalPages, currentPage }: CurrentAndTotalPages) => {
  const ButtonsContainer = styled.div`
  margin-top: 1.66rem;
  justify-self: center;
  gap: 0.62rem;
  font-family: 'Lato', sans-serif;
  display: ${totalPages > 1 ? 'flex' : 'none'};
  `;

  const PreviousButton = styled.button`
  display: ${currentPage !== 1 ? 'initial' : 'none'};
  border: none;
  background: transparent;
  font-size: 12px;
  color: ${themeColors.text.pink3};
  cursor: pointer;
  `;

  const NextButton = styled.button`
  display: ${currentPage !== totalPages ? 'initial' : 'none'};
  border: none;
  background: transparent;
  font-size: 12px;
  color: ${themeColors.text.pink3};
  cursor: pointer;
  `;

  const PageOneButton = styled.button`
    width: 2.37rem;
    height: 2.37rem;
    border-radius: 3px;
    border: 1px solid ${themeColors.text.pink3};
    font-size: 16px;
    background-color: ${currentPage === 1 ? `${themeColors.text.pink3}` : `${themeColors.background.white}`};
    color: ${currentPage === 1 ? `${themeColors.background.white}` : `${themeColors.text.pink3}`};
    cursor: pointer;

    &:hover {
      background-color: ${themeColors.button.lightPink};
      border-color: ${themeColors.button.lightPink};
      color: ${themeColors.background.white};
    }
  `;

  const LeftSeparator = styled.div`
    display: ${(currentPage > 3 && totalPages !== 4) ? 'initial' : 'none'};
    font-size: 16px;
    color: ${themeColors.text.pink3};
    padding-top: 0.8rem;
  `;

  const SecondButton = styled.button`
    display: ${(currentPage === totalPages && totalPages > 3) ? 'initial' : 'none'};
    width: 2.37rem;
    height: 2.37rem;
    border-radius: 3px;
    border: 1px solid ${themeColors.text.pink3};
    font-size: 16px;
    background-color: ${themeColors.background.white};
    color: ${themeColors.text.pink3};
    cursor: pointer;

    &:hover {
    background-color: ${themeColors.button.lightPink};
    border-color: ${themeColors.button.lightPink};
    color: ${themeColors.background.white};
    }
  `;

  const PreviousPageButton = styled.button`
    display: ${currentPage > 2 ? 'initial' : 'none'};
    width: 2.37rem;
    height: 2.37rem;
    border-radius: 3px;
    border: 1px solid ${themeColors.text.pink3};
    font-size: 16px;
    background-color: ${themeColors.background.white};
    color: ${themeColors.text.pink3};
    cursor: pointer;

    &:hover {
    background-color: ${themeColors.button.lightPink};
    border-color: ${themeColors.button.lightPink};
    color: ${themeColors.background.white};
    }
  `;

  const CurrentPageButton = styled.button`
    display: ${(currentPage !== 1 && currentPage !== totalPages) ? 'initial' : 'none'};
    width: 2.37rem;
    height: 2.37rem;
    border-radius: 3px;
    border: 1px solid ${themeColors.text.pink3};
    font-size: 16px;
    background-color: ${themeColors.text.pink3};
    color: ${themeColors.background.white};
    cursor: pointer;

    &:hover {
    background-color: ${themeColors.button.lightPink};
    border-color: ${themeColors.button.lightPink};
    color: ${themeColors.background.white};
    }
  `;

  const NextPageButton = styled.button`
    display: ${(currentPage < (totalPages - 1)) ? 'initial' : 'none'};
    width: 4.56rem;
    height: 2.37rem;
    border-radius: 3px;
    border: 1px solid ${themeColors.text.pink3};
    font-size: 16px;
    background-color: ${themeColors.background.white};
    color: ${themeColors.text.pink3};
    cursor: pointer;

    &:hover {
    background-color: ${themeColors.button.lightPink};
    border-color: ${themeColors.button.lightPink};
    color: ${themeColors.background.white};
    }
  `;

  const PageThreeButton = styled.button`
    display: ${(currentPage === 1 && totalPages > 3) ? 'initial' : 'none'};
    width: 2.37rem;
    height: 2.37rem;
    border-radius: 3px;
    border: 1px solid ${themeColors.text.pink3};
    font-size: 16px;
    background-color: ${themeColors.background.white};
    color: ${themeColors.text.pink3};
    cursor: pointer;

    &:hover {
    background-color: ${themeColors.button.lightPink};
    border-color: ${themeColors.button.lightPink};
    color: ${themeColors.background.white};
    }
  `;

  const RightSeparator = styled.div`
    display: ${(currentPage < (totalPages - 2)) ? 'initial' : 'none'};
    font-size: 16px;
    color: ${themeColors.text.pink3};
    padding-top: 0.8rem;
  `;

  const LastPageButton = styled.button`
    width: ${currentPage === 1 && totalPages === 2 ? '4.56rem' : '2.37rem'};
    height: 2.37rem;
    border-radius: 3px;
    border: 1px solid ${themeColors.text.pink3};
    font-size: 16px;
    cursor: pointer;
    background-color: ${currentPage === totalPages ? `${themeColors.text.pink3}` : `${themeColors.background.white}`};
    color: ${currentPage === totalPages ? `${themeColors.background.white}` : `${themeColors.text.pink3}`};

    &:hover {
    background-color: ${themeColors.button.lightPink};
    border-color: ${themeColors.button.lightPink};
    color: ${themeColors.background.white};
    }
  `;

  return {
    PreviousButton,
    NextButton,
    PageOneButton,
    ButtonsContainer,
    LeftSeparator,
    SecondButton,
    PreviousPageButton,
    CurrentPageButton,
    NextPageButton,
    PageThreeButton,
    RightSeparator,
    LastPageButton
  }
};