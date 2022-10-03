import React, { useEffect, useState } from 'react';
import { dummyMeals } from '../../resource/Dummy';
import DayCalorie from './DayCalorie';
import MealList from './MealList';
import MainModal from './MainModal';
import { apiTest } from '../../utils/common';
import { format } from 'date-fns';

const Meal = () => {
  // TODO: 이날 먹은 음식이 있는지 검사
  const isEmptyMeal = false; // FIXME: 임시로 상수값 사용

  const dummyCurrentDateString = format(new Date(), 'yyyyMMdd');

  // TODO: API에서 받아온 음식 리스트로 변경
  const [daysMeal, setDaysMeal] = useState<DayMeals | null>(null);

  // 이날 먹은 총합 칼로리 계산
  let totalCalorie = 0;

  if (daysMeal) {
    Object.values(daysMeal).forEach(time => {
      for (const i in time) {
        if (time[i] === null) return; // null time 건너뛰기
        time[i].forEach((food: Food) => {
          totalCalorie += food.kiloCalories; // 모든 칼로리 더하기
        });
        totalCalorie = Math.round(totalCalorie);
      }
    });
  }

  // 최초 1회, currentDate의 식사 목록을 받아오는 api 요청
  useEffect(() => {
    const fetchData = async () => {
      const response: DayMeals = await apiTest(
        `http://testDomain.io/testing/${dummyCurrentDateString}`,
        '',
        dummyMeals,
      );
      setDaysMeal(response);
    };
    fetchData();
  }, [dummyCurrentDateString]);

  return (
    <>
      <DayCalorie totalCalorie={totalCalorie}></DayCalorie>
      <MainModal />
      {daysMeal && <MealList meals={daysMeal}></MealList>}
    </>
  );
};

export default Meal;
