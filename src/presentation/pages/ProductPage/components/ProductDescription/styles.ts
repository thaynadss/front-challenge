import styled from 'styled-components';
import { mediaSizes } from 'presentation/styles/mediaSizes';
import { themeColors } from 'presentation/styles/themeColors';

export const ProdDescripContainer = styled.section`
  font-family: 'Lato', sans-serif;

  @media (max-width: ${mediaSizes.large}px) {
    text-align: center;
  };

  @media (max-width: ${mediaSizes.mobileS}px) {
    word-wrap: break-word;
  }
`;

export const TypeCountryRegion = styled.h2<{ color: string, weight?: string, cursor?: string }>`
  font-size: 14px;
  color: ${props => props.color};
  font-weight: ${props => props.weight ? props.weight : 'normal'};
  display: inline-block;
  padding-right: 0.5rem;
  cursor: ${props => props.cursor ? props.cursor : 'auto'};

  span {
    color: ${themeColors.text.gray4};
    font-weight: normal;
    padding-left: 0.5rem;
    cursor: none;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 28px;
  color: ${themeColors.text.black};
  margin: 1.1rem 0 1rem;

  @media (max-width: ${mediaSizes.medium}px) {
    font-size: 20px;
  }

  @media (max-width: ${mediaSizes.mobileS}px) {
    font-size: 18px;
    width: 80%;
    margin-left: 2.5rem;
  }
`;

export const CountryTypeClassSizeRating = styled.h2`
  font-size: 16px;
  color: ${themeColors.text.gray5};
  font-weight: normal;
  margin-bottom: 3.25rem;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-right: 0.2rem;

    @media (max-width: ${mediaSizes.mobileL}px) {
    display: none;
  }
  }

  & .flag {
    margin-right: 0.5rem;
  }

  & .sideSpacing {
    margin: 0 0.6rem;
  }

  & .rating {
    font-size: 12px;

    @media (max-width: ${mediaSizes.mobileL}px) {
    display: none;
  }
  }

  @media (max-width: ${mediaSizes.medium}px) {
    font-size: 14px;
  }

  @media (max-width: ${mediaSizes.mobileS}px) {
    font-size: 13px;
  }
`;

export const MemberValue = styled.h2<{ small: boolean, large: boolean }>`
  font-size: 32px;
  color: ${themeColors.text.pink2};
  margin-bottom: 0.3rem;

  & .currency {
    font-size: 22px;
    margin-right: 0.3rem;
  }

  & .value {
    font-size: 40px;

    @media (max-width: ${mediaSizes.mobileL}px) {
    font-size: 22px;
  }
  }

  @media (max-width: ${mediaSizes.large}px) {
    display: ${props => props.large ? 'none' : 'initial'}
  } 

  @media (min-width: ${mediaSizes.large + 1}px) {
    display: ${props => props.small ? 'none' : 'initial'}
  } 

  @media (max-width: ${mediaSizes.mobileL}px) {
    font-size: 22px;
  }
`;

export const NonMemberValue = styled.h3`
  font-size: 16px;
  color: ${themeColors.text.gray4};
  text-transform: uppercase;
  font-weight: normal;
  margin-bottom: 3.3rem;

  @media (max-width: ${mediaSizes.large}px) {
    display: none;
  }  
`;

export const SommelierTitle = styled.h3`
  font-size: 16px;
  color: ${themeColors.text.black};
  margin-bottom: 0.5rem;

  @media (max-width: ${mediaSizes.large}px) {
    text-align: left;
    margin-left: 2.5rem;
  }

  @media (max-width: ${mediaSizes.mobileS}px) {
    width: 80%;
  }
`;

export const SommelierComment = styled.p`
  font-size: 14px;
  color: ${themeColors.text.gray3};
  width: 28rem;
  line-height: 1.3rem;
  margin-bottom: 3rem;

  @media (max-width: ${mediaSizes.large}px) {
    text-align: left;
    margin-left: 2.5rem;
  };

  @media (max-width: ${mediaSizes.mobileL}px) {
    width: auto;
  }

  @media (max-width: ${mediaSizes.mobileS}px) {
    width: 80%;
  }
`;

export const ProductImage = styled.img`
  width: 23.8rem;
  height: 25rem;
  object-fit: contain;
  margin-bottom: 3.25rem;

  @media (min-width: ${mediaSizes.large + 1}px) {
    display: none;
  }

  @media (max-width: ${mediaSizes.medium}px) {
    height: 15rem;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 5rem;
  bottom: 0;
  left: 0;
  background-color: ${themeColors.background.white};
  padding: 0 2rem;

  @media (max-width: ${mediaSizes.mobileL}px) {
    padding: 0 0 0 0.5rem;
  }

  @media (min-width: ${mediaSizes.large + 1}px) {
    display: none;
  }  
`;
