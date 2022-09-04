import React from 'react';
import { useState } from 'react';
import MealList from '../components/Main/MealList';
import Modal from '../components/Main/Modal';
import Card from '../components/UI/Card';
import { dummyFoodList, dummyMeals } from '../resource/Dummy';

const Main = () => {
  const isEmptyMeal = true; // FIXME: 임시로 상수값 사용

  // TODO: API에서 받아온 음식 리스트로 변경
  const [daysMeal, setDaysMeal] = useState<DayMeals>(dummyMeals);

  // 이날 먹은 총합 칼로리 계산
  let totalKcal = 0;
  Object.values(daysMeal).forEach(time => {
    if (!time) return;
    time.forEach((food: Food) => {
      totalKcal += food.kiloCalories;
    });

    totalKcal = Math.round(totalKcal);
  });

  console.log(totalKcal);

  return (
    <>
      <div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title">식사</h2>

            {/* 음식리스트 */}
            {isEmptyMeal ? (
              <>
                <div className="stat">
                  <div className="stat-value text-3xl text-center">
                    {`${totalKcal} / 2000`}

                    <span className="text-xl ml-2">kcal</span>
                  </div>
                  <div className="stat-actions">
                    <label
                      htmlFor="my-modal-4"
                      className="btn modal-button btn-block"
                    >
                      식사 추가
                    </label>
                  </div>
                </div>

                {/* <MealList meals={daysMeal}></MealList> */}
              </>
            ) : (
              <p>If a dog chews shoes whose shoes does he choose?</p>
            )}

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <Modal />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
