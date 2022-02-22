import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from 'presentation/contexts/CartContext';
import { CatalogProvider } from 'presentation/contexts/CatalogContext';
import { ProductProvider } from 'presentation/contexts/ProductContext';
import GlobalStyle from 'presentation/styles/globalStyles';
import CatalogPage from 'presentation/pages/CatalogPage';
import Page404 from 'presentation/pages/Page404';
import ProductPage from 'presentation/pages/ProductPage';

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
