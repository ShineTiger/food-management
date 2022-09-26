import React, { useState } from 'react';
import MainCard from '../components/UI/MainCard';
import Meal from '../components/Main/Meal';
import DateHeader from '../components/Main/DateHeader';

const Main = () => {
  return (
    <>
      <div>
        <DateHeader />
        <MainCard title="식사" category={<Meal></Meal>}></MainCard>
      </div>
    </>
  );
};

export default Main;
