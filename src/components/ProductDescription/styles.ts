import styled from 'styled-components';

export const ProdDescripContainer = styled.section`
  font-family: 'Lato', sans-serif;
`;

export const TypeCountryRegion = styled.h2<{ color: string, weight?: string, cursor?: string }>`
  font-size: 14px;
  color: ${props => props.color};
  font-weight: ${props => props.weight ? props.weight : 'normal'};
  display: inline-block;
  padding-right: 0.5rem;
  cursor: ${props => props.cursor ? props.cursor : 'auto'};

  span {
    color: #888888;
    font-weight: normal;
    padding-left: 0.5rem;
    cursor: none;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 28px;
  color: #111111;
  margin: 1.1rem 0 1rem;
`;

export const CountryTypeClassSizeRating = styled.h2`
  font-size: 16px;
  color: #555555;
  font-weight: normal;
  margin-bottom: 3.25rem;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-right: 0.2rem;
  }

  & .flag {
    margin-right: 0.5rem;
  }

  & .sideSpacing {
    margin: 0 0.6rem;
  }

  & .rating {
    font-size: 12px;
  }
`;

export const MemberValue = styled.h2`
  font-size: 32px;
  color: #C81A78;
  margin-bottom: 0.3rem;

  & .currency {
    font-size: 22px;
    margin-right: 0.3rem;
  }

  & .value {
    font-size: 40px;
  }
`;

export const NonMemberValue = styled.h3`
  font-size: 16px;
  color: #888888;
  text-transform: uppercase;
  font-weight: normal;
  margin-bottom: 3.3rem;
`;

export const SommelierTitle = styled.h3`
  font-size: 16px;
  color: #111111;
  margin-bottom: 0.5rem;
`;

export const SommelierComment = styled.p`
  font-size: 14px;
  color: #666666;
  width: 28rem;
  line-height: 1.3rem;
  margin-bottom: 3rem;
`;
