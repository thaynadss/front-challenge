import styled from 'styled-components';

export const PageContainer = styled.div<{ open: boolean }>`
  overflow: hidden;
  position: ${props => props.open ? 'fixed' : 'static'};
`;

export const MainContainer = styled.main`
  background-color: #f5f5f5;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  padding: 2.48rem 4.8rem;
`;

export const BackButton = styled.button<{ size: number, padTop?: number, padLeft?: number }>`
  cursor: pointer;
  font-size: ${props => `${props.size}px`};
  font-family: 'Lato', sans-serif;
  border: none;
  background: none;
  height: 0.81rem;
  padding-left: ${props => props.padLeft ? `${props.padLeft}rem` : 'none'};
  padding-top: ${props => props.padTop ? `${props.padTop}rem` : 'none'};
`;

export const ProductImage = styled.img`
  width: 23.8rem;
  height: 35rem;
  object-fit: contain;
  margin: 0 4.2rem 0 2.25rem;
`;