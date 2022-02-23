import styled from 'styled-components';
import { mediaSizes } from 'presentation/styles/mediaSizes';
import { themeColors } from 'presentation/styles/themeColors';

export const FilterContainer = styled.div`
  @media (max-width: ${mediaSizes.medium}px) {
    display: none;
  }
`;

export const FilterForm = styled.div`
  font-family: 'Lato', sans-serif;
`;

export const FilterFieldset = styled.fieldset`
  border: none;
`;

export const FilterLegend = styled.legend`
  font-weight: bold;
  font-size: 16.5px;
  margin-bottom: 1rem;
`;

export const FilterInput = styled.input`
  width: 1rem;
  height: 1rem;
  margin-right: 0.7rem;
`;

export const FilterLabel = styled.label`
  display: flex;
  width: 11.2rem;
  height: 2.4rem;
  font-size: 14px;
`;

export const FilterTitle = styled.h2`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1.8rem;
`;

export const ClearSelection = styled.button`
  border: 0.5px solid ${themeColors.text.pink3};
  background: transparent;
  font-size: 14px;
  color: ${themeColors.text.pink3};
  cursor: pointer;
  width: 10rem;
  height: 2rem;
  border-radius: 3px;
  letter-spacing: 0.4px;

  &:hover {
    background-color: ${themeColors.button.lightPink};
    border-color: ${themeColors.button.lightPink};
    color: ${themeColors.background.white};
  }
`;