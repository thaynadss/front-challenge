import styled from 'styled-components';

export const PageContainer = styled.div`
  overflow: hidden;
`;

export const MainContainer = styled.main`
  background-color: #f5f5f5;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  padding: 2.48rem 4.8rem;
  gap: 7.4rem;
  justify-content: center;

  @media (min-width: 992px) and (max-width: 1200px) {
    padding: 2.48rem 2rem;
    gap: 2rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: space-between;
    padding: 2.48rem 2rem;
    gap: 1rem;
  }

  @media (max-width: 767px) {
    justify-content: center;
    padding: 2.48rem 0;
  }
`;
