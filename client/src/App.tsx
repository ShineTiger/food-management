import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMeal from './pages/AddMeal';
import Main from './pages/Main';
import Join from './pages/Join';

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="lg:w-96 md:w-96 sm:w-full h-screen mx-auto">
        <Navbar />
        <div className="px-2.5 bg-amber-50">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/AddMeal" element={<AddMeal />} />
            <Route path="/Join" element={<Join />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
