import { useEffect, useState } from 'react';
import { PaginationButtons } from '../PaginationButtons';
import { ProductCard } from '../ProductCard';
import { Product } from 'types/Product';
import { useCatalogContext } from 'presentation/contexts/CatalogContext';
import { getProducts } from 'services/api';
import { QuantityandButton, QuantityProducts, LoadingTitle, LoadingGif, LoadingContainer, DisplayContainer, ClearSearch, CardsContainer } from './styles';

export const ProductsDisplay = () => {
  const { catalogState, catalogDispatch } = useCatalogContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const itemsPerPage = size > 540 && size < 1024 ? 10 : 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts: Product[] = products.slice(startIndex, endIndex);

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

  useEffect(() => {
    let abortController = new AbortController();
    setLoading(true);
    const getAllProducts = async () => {
      const allProducts = await getProducts(catalogState);
      if (allProducts) {
        setProducts(allProducts.items);
        setTotalItems(allProducts.totalItems);
        setLoading(false);
      }
    };
    getAllProducts();

    return () => {
      abortController.abort();
      setLoading(false);
    };
  }, [catalogState]);

  return (
    <>
      {loading &&
        <LoadingContainer>
          <LoadingGif src='https://service.smarthint.co/content/ajax-loader.gif' alt='Carregando' />
          <LoadingTitle>Carregando...</LoadingTitle>
        </LoadingContainer >
      }

      {!loading &&
        <DisplayContainer>
          <QuantityandButton>
            <QuantityProducts><span>{totalItems}</span> produtos encontrados</QuantityProducts>
            {catalogState.search !== '' &&
              <ClearSearch onClick={handleClearSearch}>Limpar pesquisa</ClearSearch>
            }
          </QuantityandButton>
          <CardsContainer>
            {currentProducts.map((item) =>
              <ProductCard key={item.id} item={item} />)}
          </CardsContainer>
          <PaginationButtons totalPages={totalPages} currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
        </DisplayContainer>
      }
    </>
  );
};