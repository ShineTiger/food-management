import React, { ReactElement } from 'react';
import Meal from '../Main/Meal';

interface MainCardProps {
  category: ReactElement;
  title?: string;
}

const MainCard = ({ category, title }: MainCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        {category}
      </div>
    </div>
  );
};

export default MainCard;
