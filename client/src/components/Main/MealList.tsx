import React from 'react';
import Card from '../UI/Card';
import BadgeTag from '../UI/BadgeTag';

interface MealListProp {
  meals: DayMeals;
}
const MealList = ({ meals }: MealListProp) => {
  const { breakfast, lunch, dinner, snack } = meals;
  return (
    <>
      <Card title="아침">
        {breakfast ? (
          <ul>
            {breakfast.map(({ name }) => (
              <BadgeTag title={name} color="badge-ghost"></BadgeTag>
            ))}
          </ul>
        ) : (
          // TODO: 끼니 걸렀을 시
          <p></p>
        )}
      </Card>
    </>
  );
};

export default MealList;
