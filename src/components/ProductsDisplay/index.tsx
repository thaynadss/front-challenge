import { useContext, useEffect, useState } from 'react';
import { PaginationButtons } from '../PaginationButtons';
import { ProductCard } from '../ProductCard';
import * as C from './styles';
import { getProducts } from '../../contexts/CatalogContext/actions';
import { Product } from '../../types/Product';
import { CatalogContext } from '../../contexts/CatalogContext';

export const ProductsDisplay = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPage] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const { catalogState } = useContext(CatalogContext);

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await getProducts(catalogState);
      if (allProducts)
        setProducts(allProducts.items);
      setTotalPage(allProducts.totalPages);
      setTotalItems(allProducts.totalItems);
    };

    getAllProducts();
  }, [catalogState]);

  return (
    <C.DisplayContainer>
      <C.QuantityProducts><span>{totalItems}</span> produtos encontrados</C.QuantityProducts>
      <C.CardsContainer>
        {products.map((item) =>
          (<ProductCard key={item.id} id={item.id} img={item.image} title={item.name} price={item.price} discount={item.discount} memberPrice={item.priceMember} nonMemberPrice={item.priceNonMember} />))}
      </C.CardsContainer>
      <PaginationButtons totalPages={totalPages} />
    </C.DisplayContainer>
  )
}