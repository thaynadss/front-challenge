import { PaginationButtons } from '../PaginationButtons';
import { ProductCard } from '../ProductCard';
import * as C from './styles';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';

export const ProductsDisplay = () => {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    try {
      const { data } = await api.get('/products?page=1&limit=9');
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await getProducts();
      if (allProducts) setProducts(allProducts.items);
    };

    getAllProducts();
  }, []);

  return (
    <C.DisplayContainer>
      <C.QuantityProducts><span>49</span> produtos encontrados</C.QuantityProducts>
      <C.CardsContainer>
        {products.map((item, index) =>
          (<ProductCard key={index} img={item.image} title={item.name} price={item.price} discount={item.discount} memberPrice={item.priceMember} nonMemberPrice={item.priceNonMember} />))}
      </C.CardsContainer>
      <PaginationButtons />
    </C.DisplayContainer>
  )
}