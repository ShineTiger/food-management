import React from 'react';
import Navbar from '../components/Navbar';

const Main = () => {
  return (
    <>
      <div className="lg:w-96 md:w-96 sm:w-full h-screen mx-auto px-2.5">
        <Navbar />
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
