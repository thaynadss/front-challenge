import styled from 'styled-components';
import { mediaSizes } from '../../styles/mediaSizes';

export const ScreenContainer = styled.div<{ search: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(254, 254, 254, 0.32);
  position: absolute;
  top: 5.5rem;
  left: 0;
  visibility: ${props => props.search ? 'visible' : 'hidden'};
`;

export const PageBackground = styled.div`
  width: 100vw;
  top: 10.06rem;
  height: 100vh;
`;

export const SearchForm = styled.div`
  width: 100vw;
  height: 4.56rem;
  background-color: #f5f5f5;
  box-shadow: 0 2px 20px 0 rgb(0 0 0 / 15%);
  position: absolute;
  padding: 0.93rem 4.7rem;
  font-family: 'Lato', sans-serif;
`;

export const SearchLabel = styled.label`
  display: flex;
  height: 2.75rem;
  background-color: #FFF;
  border-radius: 4px;
  padding: 0 0.93rem 0.93rem 1rem;

  @media (max-width: ${mediaSizes.medium}px) {
    justify-content: space-between;
    }

  span {
    color: #666;
    font-size: 11px;
    margin: 0.6rem 1rem 0 0;
    align-self: center;

    @media (max-width: ${mediaSizes.medium}px) {
    display: none;
    };
  };
`;

export const SearchInput = styled.input`
  border: none;
  width: 85%;
  height: 2.75rem;
  font-size: 20px;
`;

export const SubmitButton = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  margin-top: 0.5rem;
  cursor: pointer;
`;