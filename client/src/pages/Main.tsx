import React from 'react';
import { useState } from 'react';
import MainCard from '../components/UI/MainCard';
import { dummyFoodList, dummyMeals } from '../resource/Dummy';
import Meal from '../components/Main/Meal';

const Main = () => {
  // TODO: API에서 받아온 음식 리스트로 변경
  const [daysMeal, setDaysMeal] = useState<DayMeals>(dummyMeals);

  // 이날 먹은 총합 칼로리 계산
  let totalCalorie = 0;
  Object.values(daysMeal).forEach(time => {
    if (!time) return;
    time.forEach((food: Food) => {
      totalCalorie += food.kiloCalories;
    });

    totalCalorie = Math.round(totalCalorie);
  });

  console.log(totalCalorie);

  return (
    <>
      <div>
        <MainCard title="식사" category={<Meal></Meal>}></MainCard>
      </div>
    </>
  );
};

export default Main;
