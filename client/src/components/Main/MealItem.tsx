import React from 'react';
import BadgeTag from '../UI/BadgeTag';
import Card from '../UI/Card';

interface MealItemProp {
  mealList: Food[] | null;
  time: string;
}

const MealItem = ({ mealList, time }: MealItemProp) => {
  return (
    <Card title={time}>
      {mealList ? (
        <ul>
          {mealList.map(({ name }, index) => (
            <BadgeTag key={index} title={name} color="badge-ghost"></BadgeTag>
          ))}
        </ul>
      ) : (
        // TODO: 끼니 걸렀을 시
        <p></p>
      )}
    </Card>
  );
};

export default MealItem;
