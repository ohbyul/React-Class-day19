import React from 'react';
import {
  BrowserRouter,  //전체를 묶는..
  Routes,
  Route,  
  Link, //a태그 처럼 연동
} from "react-router-dom";
import Main from './components6/Main';
import Member from './components6/Member';
import MemberDetail from './components6/MemberDetail';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* 멀티연결 */}
            <Route path="/" element={ <Main />}>
                <Route path= "main"/>
                <Route path= "main1"/>
            </Route>

            <Route path="member" >
                <Route element = {<Member />} />
                <Route path =":memberId" element={<MemberDetail /> } />
            </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
