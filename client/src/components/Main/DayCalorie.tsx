import React from 'react';

interface DayKcalProp {
  totalCalorie: number;
}

const DayCalorie = ({ totalCalorie }: DayKcalProp) => {
  const RECOMMENDED_CALORIE = 2000; // 권장섭취량

  return (
    <div className="stat">
        <span> / {RECOMMENDED_CALORIE}</span>
        <span className="text-xl ml-2">kcal</span>
      </div>
    </div>
  );
};

export default DayCalorie;
