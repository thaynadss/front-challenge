import {
  QuantityandButton,
  QuantityProducts,
  LoadingTitle,
  LoadingGif,
  LoadingContainer,
  DisplayContainer,
  ClearSearch,
  CardsContainer
} from './styles';
import { useEffect, useState } from 'react';
import { PaginationButtons } from '../PaginationButtons';
import { ProductCard } from '../ProductCard';
import { useCatalogContext } from 'presentation/contexts/CatalogContext';
import { useProducts } from 'services/useProducts';

export const ProductsDisplay = () => {
  const { catalogState, catalogDispatch } = useCatalogContext();
  const { data, isLoading, error } = useProducts(catalogState);

  const [size, setSize] = useState(window.innerWidth);
  const itemsPerPage = size > 540 && size < 1024 ? 10 : 9;
  const totalPages = data?.totalItems ? Math.ceil(data?.totalItems / itemsPerPage) : 0;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = data?.items.slice(startIndex, endIndex);


  const handleCurrentPage = (page: number) => setCurrentPage(page);

  const handleClearSearch = () => {
    catalogDispatch({
      type: 'SEARCHED_TEXT',
      payload: ''
    });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [catalogState]);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      {isLoading &&
        <LoadingContainer>
          <LoadingGif src='https://service.smarthint.co/content/ajax-loader.gif' alt='Carregando' />
          <LoadingTitle>Carregando...</LoadingTitle>
        </LoadingContainer >
      }

      {error &&
        <LoadingContainer>
          <LoadingTitle>Não foi possível carregar os produtos =(</LoadingTitle>
        </LoadingContainer >
      }

      {!error && !isLoading &&
        <DisplayContainer>
          <QuantityandButton>
            <QuantityProducts><span>{data?.totalItems}</span> produtos encontrados</QuantityProducts>
            {catalogState.search !== '' &&
              <ClearSearch onClick={handleClearSearch}>Limpar pesquisa</ClearSearch>
            }
          </QuantityandButton>
          <CardsContainer>
            {currentProducts?.map((item) =>
              <ProductCard key={item.id} item={item} />)}
          </CardsContainer>
          <PaginationButtons totalPages={totalPages} currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
        </DisplayContainer>
      }
    </>
  );
};