import styled from 'styled-components';
import { mediaSizes } from '../../styles/mediaSizes';

export const PageContainer = styled.div<{ open: boolean }>`
  overflow: hidden;
  position: ${props => props.open ? 'fixed' : 'static'};
`;

export const MainContainer = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  padding: 2.48rem 4.8rem;
  gap: 7.4rem;
  font-size: 'Lato', sans-serif;

  @media (min-width: ${mediaSizes.medium}px) and (max-width: ${mediaSizes.xlarge}px) {
    padding: 2.48rem 2rem;
    gap: 2rem;
  }

  @media (max-width: ${mediaSizes.small}px) {
    padding: 2.48rem 1rem;
  }
`;

export const BackToHomeText = styled.div`
  color: #e43fa0;
  font-size: 10px;
  margin-bottom: 2.5rem;

  @media (max-width: ${mediaSizes.medium}px) {
    margin-bottom: 1.3rem;
  }
`;

export const ErrorName = styled.span`
  font-size: 14px;
  color: #CCCCCC;
`;

export const Title = styled.div`
  font-size: 30px;
  display: inline-flex;

  @media (max-width: ${mediaSizes.medium}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${mediaSizes.mobileL}px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 22.56rem;
  height: 10.5rem;
  margin-left: 15rem;

  @media (min-width: ${mediaSizes.medium}px) and (max-width: ${mediaSizes.xmedium}px) {
    margin-left: 5rem;
  }

  @media (max-width: ${mediaSizes.medium}px) {
    width: 18rem;
    height: 8rem;
    margin: 2rem 0 0 0;
  }

  @media (max-width: ${mediaSizes.mobileS}px) {
    width: 15rem;
    height: 7rem;
  }
`;
