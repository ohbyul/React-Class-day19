import React from 'react';
import {
  BrowserRouter,  //전체를 묶는..
  Routes,
  Route,  
  Link, //a태그 처럼 연동
} from "react-router-dom";
import About from './components2/About';
import Ceo from './components2/Ceo';
import Home from './components2/Home';
import Navbar from './components2/Navbar';
import NotFiles from './components2/NotFiles';
import Sub from './components2/Sub';

import './css/reset.css';
import './components2/style.css';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/ceo" element = {<Ceo />} />
          <Route path = "/sub" element = {<Sub />} />
          <Route path = "*" element = {<NotFiles />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

//BrowserRouter 로 감싸준다.
//https://cafe.naver.com/ezen03?iframe_url=/MyCafeIntro.nhn%3Fclubid=30578413
//https://reactrouter.com/docs/en/v6/upgrading/v5