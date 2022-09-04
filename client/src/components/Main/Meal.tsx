import React, { useState } from 'react';
import ModalCard from '../UI/ModalCard';
import ModalButton from '../UI/ModlButton';
import { Link, useNavigate } from 'react-router-dom';
import modalCss from './Modal.module.css';
import { dummyFoodList, dummyMeals } from '../../resource/Dummy';
import DayCalorie from './DayCalorie';
import MealList from './MealList';
import MainModal from './MainModal';
import Card from '../UI/Card';

const Meal = () => {
  // TODO: 이날 먹은 음식이 있는지 검사
  const navigate = useNavigate();

  const handleSelect = (queryName: string) => {
    setTimeout(() => navigate(`/Addmeal?type=${queryName}`), 200);
  };

  const isEmptyMeal = false; // FIXME: 임시로 상수값 사용

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

  return (
    <>
      <DayCalorie totalCalorie={totalCalorie}></DayCalorie>
      <MainModal></MainModal>
      {!isEmptyMeal && <MealList meals={daysMeal}></MealList>}
    </>
  );
};

export default Meal;
