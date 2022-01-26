import { useContext, useEffect, useState } from 'react';
import { PaginationButtons } from '../PaginationButtons';
import { ProductCard } from '../ProductCard';
import * as C from './styles';
import { getProducts } from '../../contexts/CatalogContext/actions';
import { Product } from '../../types/Product';
import { CatalogContext } from '../../contexts/CatalogContext';

export const ProductsDisplay = () => {
  const { catalogState } = useContext(CatalogContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = currentPage + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);


  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await getProducts(catalogState);
      if (allProducts)
        setProducts(allProducts.items);
      setTotalItems(allProducts.totalItems);
    };

    getAllProducts();
  }, [catalogState]);

  // useEffect(() => {
  //   console.log(catalogState)
  //   console.log()
  // }, [catalogState])

  return (
    <C.DisplayContainer>
      <C.QuantityProducts><span>{totalItems}</span> produtos encontrados</C.QuantityProducts>
      <C.CardsContainer>
        {currentProducts.map((item) =>
          (<ProductCard key={item.id} id={item.id} img={item.image} title={item.name} price={item.price} discount={item.discount} memberPrice={item.priceMember} nonMemberPrice={item.priceNonMember} />))}
      </C.CardsContainer>
      <PaginationButtons totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </C.DisplayContainer>
  )
}