import React from 'react';
import { useState } from 'react';
import MealList from '../components/MealList';
import Modal from '../components/Modal';
import { dummyFoodList, dummyMeals } from '../resource/Dummy';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isEmptyMeal = true; // FIXME: 임시로 상수값 사용

  // TODO: API에서 받아온 음식 리스트로 변경
  const [daysMeal, setDaysMeal] = useState<DayMeals>(dummyMeals);

  return (
    <>
      <div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title">Shoes!</h2>

            {/* 음식리스트 */}
            {isEmptyMeal ? (
              <MealList meals={daysMeal}></MealList>
            ) : (
              <p>If a dog chews shoes whose shoes does he choose?</p>
            )}

            <label htmlFor="my-modal-4" className="btn modal-button">
              open modal
            </label>

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
