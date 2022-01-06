import React from 'react';
import {
  BrowserRouter,  //전체를 묶는..
  Routes,
  Route,  
  Link, //a태그 처럼 연동
} from "react-router-dom";
import Home from './components5/Home';
import About from './components5/About';
import Profile from './components5/Profile';


function App() {
  return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to ="/" >Home</Link> </li>
            <li><Link to ="/about" >About</Link> </li>
            <li><Link to ="profile" >Profile</Link> </li> 
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="profile" element={<Profile />} >
              <Route path=":id"/>
          </Route>
          {/* 마지막 프로필은 루트 열고 루트안에 또 루트태그 넣어준다 */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;

// Link to 에 슬러쉬 생략 가능