import { useContext, useEffect, useState } from 'react';
import { PaginationButtons } from '../PaginationButtons';
import { ProductCard } from '../ProductCard';
import * as C from './styles';
import { Product } from '../../types/Product';
import { CatalogContext } from '../../contexts/CatalogContext';
import { getProducts } from '../../services/api';

export const ProductsDisplay = () => {
  const { catalogState, catalogDispatch } = useContext(CatalogContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<number>(window.innerWidth);

  const itemsPerPage = size > 540 && size < 1024 ? 10 : 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
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
      if (allProducts)
        setProducts(allProducts.items);
      setTotalItems(allProducts.totalItems);
      setLoading(false);
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
        <C.LoadingContainer>
          <C.LoadingGif src='https://service.smarthint.co/content/ajax-loader.gif' alt='Carregando' />
          <C.LoadingTitle>Carregando...</C.LoadingTitle>
        </C.LoadingContainer >
      }

      {!loading &&
        <C.DisplayContainer>
          <C.QuantityandButton>
            <C.QuantityProducts><span>{totalItems}</span> produtos encontrados</C.QuantityProducts>
            {catalogState.search !== '' &&
              <C.ClearSearch onClick={handleClearSearch}>Limpar pesquisa</C.ClearSearch>
            }
          </C.QuantityandButton>
          <C.CardsContainer>
            {currentProducts.map((item) =>
              <ProductCard key={item.id} item={item} />)}
          </C.CardsContainer>
          <PaginationButtons totalPages={totalPages} currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
        </C.DisplayContainer>
      }
    </>
  );
};