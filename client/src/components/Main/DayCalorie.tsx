import React, { useState, useEffect } from 'react';

interface DayKcalProp {
  totalCalorie: number;
}

interface DayStatusType {
  status: 'less' | 'good' | 'over' | null;
  color: 'success' | 'warning' | 'error' | null;
  message: string;
}
const DayCalorie = ({ totalCalorie }: DayKcalProp) => {
  const RECOMMENDED_CALORIE = 2000; // 권장섭취량

  // 오늘 먹은 식사에 대해 설명하는 status
  const [DailyStatus, setDailyStatus] = useState<DayStatusType>({
    message: '',
    color: null,
    status: null,
  });

  // 먹은 칼로리에 해당하는 status를 지정
  useEffect(() => {
    if (
      // 권장칼로리 +- 200
      RECOMMENDED_CALORIE - 200 < totalCalorie &&
      totalCalorie < RECOMMENDED_CALORIE + 200
    ) {
      setDailyStatus({
        message: '멋진 식사를 했네요! 🤤',
        color: 'success',
        status: 'good',
      });

      // 권장칼로리 미달
    } else if (totalCalorie < RECOMMENDED_CALORIE) {
      setDailyStatus({
        message: '뭐라도 더 드셔야겠는데요...🥺',
        color: 'warning',
        status: 'less',
      });
    } else {
      setDailyStatus({
        message: '배부르게 드셨네요! 🥴',
        color: 'error',
        status: 'over',
      });
    }
  }, [totalCalorie]);

  return (
    <div className="stat">
      <div className={`stat-value text-3xl text-center`}>
        <span className={`text-${DailyStatus.color}`}>{`${totalCalorie}`}</span>
        <span> / {RECOMMENDED_CALORIE}</span>
        <span className="text-xl ml-2">kcal</span>
      </div>
      <span
        className={`text-xs text-center alert-${DailyStatus.color} rounded-xl p-1 mt-5`}
      >
        {DailyStatus.message}
      </span>
    </div>
  );
};

export default DayCalorie;
