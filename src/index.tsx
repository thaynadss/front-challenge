import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
import GlobalStyle from './styles/globalStyles';
import CatalogPage from './templates/CatalogPage';
import ProductPage from './templates/ProductPage';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<CatalogPage />} />
            <Route path='/product/:name' element={<ProductPage />} />
          </Routes>
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
