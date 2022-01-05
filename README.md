# Class 19 - 

## day 19 22.01.04
### /components
```
https://ko.reactjs.org/docs/hooks-reference.html#usereducer
```
#### /Test1.js 
```
useReducer / dispatch 기본 구조
```
#### /Test2.js 
```
count 2개 예제 활용
action.step 사용
```
#### /Test3.js 
```
도형 너비 증가감소
초기값 {} 일때, return값 메소드..
```
#### /Test4.js 
```
useReducer / axios 연결
```
### /components1 && App1.js
```
router 기본 구조 및 응용
참고 : https://reactrouter.com/docs/en/v6/upgrading/v5
```
- react : router 란 
```
SPA(Single Page Application) 싱글페이지라고 부르는 이유는 유저가 처음 접속했을때 구체적인 data를 제외한 정적파일을 모두 불러오기 때문 
리액트 라우터로 페이지를 나누어 유저가 접속하는 url마다 다른 data를 보여줄 수 할수 있음
페이지의 로딩 없이, 페이지에 필요한 컴포넌트를 불러와 렌더링 하여 보여주도록 도와줌
새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태
```
```
yarn add react-router-dom 
```
#### App1.js
```
import {  BrowserRouter as Router ,  Routes,  Route,  Link  } from "react-router-dom";
<Route path="주소" element={ <보여주고싶은 컴포넌트 /> }>

Switch => Routes로 

Route : 어떤경로로 들어왔을때 어떤 컴포넌트를 보여주겠다.. ( 컴포넌트 보이는 영역) 
<Routes>
<Route path="/aaa" element={<Aaa />} />
<Route path="/bbb" element={<Bbb />} />
</Routes>

Link : Router의 주소를 바꿈 a 태그지만 새로고침 안됨
<Link to="/">홈</Link>
<Link to="/path주소">소개</Link>
<Link to="/about">소개</Link>

useHistory 사라짐 - useNavigate 함수
history.push('/') -> navigate('/')
```


