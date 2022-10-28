import { BrowserRouter, Route, Routes } from 'react-router-dom';
import appModuleCss from './App.module.css';
import SearchFoods from './pages/SearchFoods';
import Main from './pages/Main';
import Join from './pages/Join';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';
import Total from './pages/Total';

//components
import Navbar from './components/Main/Navbar';
import MyPage from './components/MyPage/MyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="lg:w-96 md:w-96 sm:w-full h-screen mx-auto">
        <Navbar />
        <div className="px-2.5 pt-2.5 bg-amber-50 h-screen	">
          <Routes>
            <Route path="/Join" element={<Join />} />
            <Route path="/Login" element={<Login />} />

            <Route element={<RequireAuth />}>
              <Route path="/" element={<Main />} />
              <Route path="/SearchFoods" element={<SearchFoods />} />
              <Route path="/Total" element={<Total />} />
              <Route path="/Mypage" element={<MyPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
