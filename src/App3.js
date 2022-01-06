import React from 'react';
import {
  BrowserRouter,  //전체를 묶는..
  Routes,
  Route,  
  Link, //a태그 처럼 연동
} from "react-router-dom";
import Home from './components3/Home';
import About from './components3/About';
import Profile from './components3/Profile';
import Front from './components3/Front';

const data = [
  {title : 'html' , info : 'html 에 대한 설명입니다.'},
  {title : 'css' , info : 'css 에 대한 설명입니다.'},
  {title : 'javaScript' , info : 'javaScript 에 대한 설명입니다.'},
  {title : 'react' , info : 'react 에 대한 설명입니다.'},
  {title : 'vue' , info : 'vue 에 대한 설명입니다.'},
]

function App() {
  return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to ="/" >Home</Link> </li>
            <li><Link to ="/about" >About</Link> </li>
            <li><Link to ="profile" >Profile</Link> </li> 

            <li><Link to ="front/html" >html</Link> </li>
            <li><Link to ="front/css" >css</Link> </li>
            <li><Link to ="front/javaScript" >javaScript</Link> </li>
            <li><Link to ="front/react" >react</Link> </li>
            <li><Link to ="front/vue" >vue</Link> </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="front/:name" element={<Front data={data} />} />
          {/* <Route path="front/:사용자정의변수" element={<Front />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;

// Link to 에 슬러쉬 생략 가능