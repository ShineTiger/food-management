import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMeal from './pages/AddMeal';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AddMeal" element={<AddMeal />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
