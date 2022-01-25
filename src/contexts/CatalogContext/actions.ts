import api from '../../services/api';

type Props = {
  page: number;
  filter: string;
  search: string;
}

export async function getProducts({ page, filter, search }: Props) {
  try {
    const { data } = await api.get(`/products?page=${page}&limit=9${filter}${search}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
