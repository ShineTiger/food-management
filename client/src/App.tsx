import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMeal from './pages/AddMeal';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="w-full bg-gray-800 px-4">sdf</div>
      <button className="btn">Hello daisyUI</button>
      <div className="alert shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>12 unread messages. Tap to see.</span>
        </div>
      </div>
      <Routes>
        <Route path="/AddMeal" element={<AddMeal />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
