import React from 'react';
import MainCard from '../components/UI/MainCard';
import Meal from '../components/Main/Meal';

const Main = () => {
  return (
    <>
      <div>
        <MainCard title="식사" category={<Meal></Meal>}></MainCard>
      </div>
    </>
  );
};

export default Main;
