import logo from './logo.svg';
import './App.css';
import Home from './components1/Home';
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import About from './components1/About';
import Ceo from './components1/Ceo';
import Sub from './components1/Sub';
import NotFiles from './components1/NotFiles';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/ceo">Ceo</Link></li>
            <li><Link to = "/sub">Sub</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ceo" element={<Ceo />} />
          <Route path="/sub" element={<Sub />} />
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//BrowserRouter 로 감싸준다.
//https://cafe.naver.com/ezen03?iframe_url=/MyCafeIntro.nhn%3Fclubid=30578413
//https://reactrouter.com/docs/en/v6/upgrading/v5