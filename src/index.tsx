import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { CatalogProvider } from './contexts/CatalogContext';
import { ProductProvider } from './contexts/ProductContext';
import GlobalStyle from './styles/globalStyles';
import CatalogPage from './templates/CatalogPage';
import Page404 from './templates/Page404';
import ProductPage from './templates/ProductPage';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <CatalogProvider>
        <CartProvider>
          <ProductProvider>
            <Routes>
              <Route path='/' element={<CatalogPage />} >
                <Route path='home' element={<CatalogPage />} />
              </Route>
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </ProductProvider>
        </CartProvider>
      </CatalogProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
