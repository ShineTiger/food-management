import React from 'react';
import Card from '../UI/Card';
import BadgeTag from '../UI/BadgeTag';
import MealItem from './MealItem';

interface MealListProp {
  meals: DayMeals;
}
const MealList = ({ meals }: MealListProp) => {
  const { breakfast, lunch, dinner, snack } = meals;

  return (
    <>
      <MealItem time="아침" mealList={breakfast} />
      <MealItem time="점심" mealList={lunch} />
      <MealItem time="저녁" mealList={dinner} />
      <MealItem time="간식" mealList={snack} />
    </>
  );
};

export default MealList;
