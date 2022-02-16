import axios from 'axios';
import { data } from '../contexts/CatalogContext/data';
import { api, getProducts } from './api';
import { apiMock } from './mock';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({})),
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({}))
  }))
}));
const mockedAxios = api as jest.Mocked<typeof axios>;

describe('getProducts', () => {
  it('should return api data', async () => {
    mockedAxios.get.mockResolvedValue({ data: apiMock });

    const result = await getProducts(data);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`/products?${data.search}${data.filter}`);
    expect(result).toEqual(apiMock);
  });
});