import React from 'react';

interface MealListProp {
  meals: DayMeals;
}
const MealList = ({ meals }: MealListProp) => {
  const { breakfast, lunch, dinner, snack } = meals;
  return <div></div>;
};

export default MealList;
