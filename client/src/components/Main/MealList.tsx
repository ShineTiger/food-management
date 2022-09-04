import React from 'react';
import Card from '../UI/Card';
import BadgeTag from '../UI/BadgeTag';
import MealItem from './MealItem';
import { Divider } from '@chakra-ui/react';

interface MealListProp {
  meals: DayMeals;
}
const MealList = ({ meals }: MealListProp) => {
  const { breakfast, lunch, dinner, snack } = meals;

  return (
    <>
      <div className="collapse">
        <input type="checkbox" className="peer " />
        <div className="collapse-title py-0 pr-5">
          <div className="divider">더보기</div>
        </div>
        <div className="collapse-content">
          <MealItem time="아침" mealList={breakfast} />
          <MealItem time="점심" mealList={lunch} />
          <MealItem time="저녁" mealList={dinner} />
          <MealItem time="간식" mealList={snack} />
        </div>
      </div>
    </>
  );
};

export default MealList;
