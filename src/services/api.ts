import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wine-back-test.herokuapp.com/',
});