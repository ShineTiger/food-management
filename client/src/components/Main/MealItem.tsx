import React from 'react';
import BadgeTag from '../UI/BadgeTag';
import Card from '../UI/Card';

interface MealItemProp {
  mealList: Food[];
  time: string;
}

const MealItem = ({ mealList, time }: MealItemProp) => {
  let calorie = 0;
  mealList.map(({ kiloCalories }) => {
    calorie += kiloCalories;
  });

  calorie = Math.round(calorie);

  return (
    <Card title={time} rightTitle={`${calorie} kcal`}>
      <ul className="mt-2">
        {mealList.map(({ name }, index) => (
          <BadgeTag key={index} title={name} color="badge-ghost"></BadgeTag>
        ))}
      </ul>
    </Card>
  );
};

export default MealItem;
