import styled from 'styled-components';
import { mediaSizes } from 'presentation/styles/mediaSizes';
import { themeColors } from 'presentation/styles/themeColors';

export const PageContainer = styled.div<{ open: boolean }>`
  overflow: hidden;
  position: ${props => props.open ? 'fixed' : 'static'};
`;

export const MainContainer = styled.main`
  background-color: ${themeColors.background.lightGray};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  padding: 2.48rem 4.8rem;
  gap: 7.4rem;
  justify-content: center;

  @media (min-width: ${mediaSizes.xmedium}px) and (max-width: ${mediaSizes.xlarge}px) {
    padding: 2.48rem 2rem;
    gap: 2rem;
  }

  @media (min-width: ${mediaSizes.medium}px) and (max-width: ${mediaSizes.xmedium - 1}px){
    justify-content: space-between;
    padding: 2.48rem 2rem;
    gap: 1rem;
  }

  @media (max-width: ${mediaSizes.medium - 1}px) {
    justify-content: center;
    padding: 2.48rem 0;
  }
`;
