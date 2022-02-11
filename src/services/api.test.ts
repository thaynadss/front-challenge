import axios from 'axios';
import { data } from '../contexts/CatalogContext/data';
import { api, getProducts } from './api';
import { apiMock } from './mock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getProducts', () => {
  it('should return api data', async () => {
    mockedAxios.get.mockResolvedValue(apiMock as any);

    const result = await getProducts(data);

    expect(mockedAxios.get).toHaveBeenCalledWith(`${api}/products?${data.search}${data.filter}`);
    expect(result).toEqual(apiMock);
  });
});