import React from 'react';
import {
  BrowserRouter,  //전체를 묶는..
  Routes,
  Route,  
  Link, //a태그 처럼 연동
} from "react-router-dom";
import Main from './components7/Main';
import ProductDetail from './components7/ProductDetail';
import Products from './components7/Products';
import './components7/style.css'


function App() {
  return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/products">Products</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products">
              <Route element ={<Products />} index />
              <Route path =":productId" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
