import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import CatalogPage from './templates/CatalogPage';
import ProductPage from './templates/ProductPage';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CatalogPage />} />
        <Route path='/product' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
