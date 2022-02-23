import { State } from 'presentation/contexts/CatalogContext/reducer';
import { Product } from 'types/Product';
import { getProducts } from './api';

type Props = {
  catalogState: State;
  setError: (param: boolean) => void;
  setLoading: (param: boolean) => void;
  setProducts: (param: Product[]) => void;
  setTotalItems: (param: number) => void;
}

const apiCallFn = ({ catalogState, setError, setLoading, setProducts, setTotalItems }: Props) => {
  let abortController = new AbortController();

  try {
    setError(false);
    setLoading(true);
    const getAllProducts = async () => {
      const allProducts = await getProducts(catalogState);
      if (allProducts) {
        setProducts(allProducts.items);
        setTotalItems(allProducts.totalItems);
        setLoading(false);
      }
    }
    getAllProducts();
  } catch (error) {
    setError(true);
    setLoading(false);
    throw new Error("Não foi possível carregar os produtos.");
  }
  finally {
    abortController.abort();
  };
};

export default apiCallFn;