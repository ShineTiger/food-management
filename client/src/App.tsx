import { BrowserRouter, Route, Routes } from 'react-router-dom';
import appModuleCss from './App.module.css';
import AddMeal from './pages/AddMeal';
import Main from './pages/Main';
import Join from './pages/Join';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';
import CheckMeal from './pages/CheckMeal';

//components
import Navbar from './components/Main/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="lg:w-96 md:w-96 sm:w-full h-screen mx-auto">
        <Navbar />
        <div className="px-2.5 bg-amber-50 h-screen	">
          <Routes>
            <Route path="/Join" element={<Join />} />
            <Route path="/Login" element={<Login />} />

            <Route element={<RequireAuth />}>
              <Route path="/" element={<Main />} />
              <Route path="/AddMeal" element={<AddMeal />} />
              <Route path="/CheckMeal" element={<CheckMeal />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
