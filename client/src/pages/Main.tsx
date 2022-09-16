import React, { useState } from 'react';
import MainCard from '../components/UI/MainCard';
import Meal from '../components/Main/Meal';
import DateHeader from '../components/Main/DateHeader';

import startOfDay from 'date-fns/startOfDay';

const Main = () => {
  const [currentDate, setCurrentDate] = useState<Date>(startOfDay(new Date()));

  return (
    <>
      <div>
        <DateHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <MainCard title="식사" category={<Meal></Meal>}></MainCard>
      </div>
    </>
  );
};

export default Main;
