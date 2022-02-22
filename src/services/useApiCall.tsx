import { useState } from 'react';
import { State } from 'presentation/contexts/CatalogContext/reducer';
import { Product } from 'types/Product';
import { getProducts } from './api';

// type Props = {
//   state: State;
//   setLoading: (loading: boolean) => void;
// }

const useApiCall = (state: State) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  function use() {
    setLoading(true);

    try {
      const getAllProducts = async () => {
        const allProducts = await getProducts(state);
        return (
          setProducts(allProducts.items),
          setTotalItems(allProducts.totalItems)
        )
      }
    } catch (error) {
      throw new Error("Não foi possível carregar os produtos.");
    }
    finally {
      setLoading(false)
    }
  }

  use()

  return {
    loading,
    products,
    totalItems
  }
}

export default useApiCall;

// function handleMyCustomData(myData, myOptions) {
//   try {
//     setIsLoading(true);
//     const myAwesomeData = await myservice.post('url', myOptions);
//     return myAwesomeData
//   } catch (error) {
//     throw myAwesomeError
//   }
//   finally {
//     setIsLoading(false)
//   }
// }

// return { handleMyCustomData, isLoading }