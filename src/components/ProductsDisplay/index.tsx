import { PaginationButtons } from '../PaginationButtons';
import { ProductCard } from '../ProductCard';
import * as C from './styles';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';

export const ProductsDisplay = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPage] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  async function getProducts() {
    try {
      const { data } = await api.get(`/products?page=1&limit=9`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await getProducts();
      if (allProducts)
        setProducts(allProducts.items);
      setPage(allProducts.page);
      setTotalPage(allProducts.totalPages);
      setTotalItems(allProducts.totalItems);
    };

    getAllProducts();
  }, []);

  return (
    <C.DisplayContainer>
      <C.QuantityProducts><span>{totalItems}</span> produtos encontrados</C.QuantityProducts>
      <C.CardsContainer>
        {products.map((item) =>
          (<ProductCard key={item.id} id={item.id} img={item.image} title={item.name} price={item.price} discount={item.discount} memberPrice={item.priceMember} nonMemberPrice={item.priceNonMember} />))}
      </C.CardsContainer>
      <PaginationButtons page={page} totalPages={totalPages} />
    </C.DisplayContainer>
  )
}