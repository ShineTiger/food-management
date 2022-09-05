import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddMeal from './pages/AddMeal';
import Main from './pages/Main';
import Join from './pages/Join';
import Login from './pages/Login';

//components
import Navbar from './components/Navbar';

function App() {
  const [loginedUserData, setUserData] = useState();
  const TOKEN_KEY = 'token';

  //test용 일회성 토큰세팅
  //localStorage.setItem(TOKEN_KEY, 'asdf');

  //토큰유무검사 -> 로그인 했는지 확인
  const isLogined = async (tokenKey: string) => {
    const tokenValue = localStorage.getItem(tokenKey);
    let userDataObject;

    if (typeof tokenValue === 'string') {
      const userData = (await axios.post('/api/testSuccess', 'logined user'))
        .data;
      if (userData.status === 'success') {
        userDataObject = JSON.parse(userData.message);
        setUserData(userDataObject);
      }
    } else {
      alert('로그인해 주세요 ');
    }
  };

  //테스트용 useEffect - 1번째는 토큰이 없을때 isLogined의 alert가 정상적으로 출력되는지, 2번째는 로그인 후 userDataObject가 콘솔창에 출력되는지 확인.
  useEffect(() => {
    isLogined(TOKEN_KEY)?.catch(alert);
  }, []);
  useEffect(() => {
    console.log(loginedUserData);
  }, [loginedUserData]);

  return (
    <BrowserRouter>
      <div className="lg:w-96 md:w-96 sm:w-full h-screen mx-auto">
        <Navbar />
        <div className="px-2.5 bg-amber-50">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/AddMeal" element={<AddMeal />} />
            <Route path="/Join" element={<Join />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
