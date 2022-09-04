import React from 'react';

interface DayKcalProp {
  totalCalorie: number;
}

const DayCalorie = ({ totalCalorie }: DayKcalProp) => {
  return (
    <div className="stat">
      <div className="stat-value text-3xl text-center">
        {`${totalCalorie} / 2000`}

        <span className="text-xl ml-2">kcal</span>
      </div>
      <div className="stat-actions">
        <label htmlFor="my-modal-4" className="btn modal-button btn-block">
          식사 추가
        </label>
      </div>
    </div>
  );
};

export default DayCalorie;
