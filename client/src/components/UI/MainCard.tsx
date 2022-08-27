import React, { ReactElement } from 'react';
import Meal from '../Main/Meal';

interface MainCardProps {
  category: ReactElement;
}

const MainCard = ({ category }: MainCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body ">{category}</div>
    </div>
  );
};

export default MainCard;
