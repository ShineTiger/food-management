import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFood } from '../redux/slice/seletedFoodSlice';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';

const SelectedMeal = () => {
  const [foodCalorieArr, setFoodCalorieArr] = useState<number[]>([]);
  const [totalFoodCalorie, setTotalFoodCalorie] = useState<number>();

  const dispatch = useDispatch();

  const selectedFood: string[] = useSelector(
    (store: RootState) => store.selectedFoods.checkedInput,
  );

  const fetchCalorieData = async () => {
    const calorieData: number[] = (
      await axios.post('/api/foodCalorie', { selectedFood })
    ).data.message;
    setFoodCalorieArr(calorieData);
    setTotalFoodCalorie(calorieData.reduce((prev, current) => prev + current));
  };

  const submitSeletedFood = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    axios.post('api/testSuccess', { method: 'POST', body: new FormData() });
  };

  const onRemoved = (name: string) => {
    dispatch(setSelectedFood(selectedFood.filter(el => el !== name)));
    const removeIndex = selectedFood.indexOf(
      selectedFood.filter(el => el === name).toString(),
    );

    //undefined의 경우일때 TS에러를 일으키므로 if문으로 감싼다.
    if (totalFoodCalorie) {
      setTotalFoodCalorie(totalFoodCalorie - foodCalorieArr[removeIndex]);
    }
    setFoodCalorieArr(foodCalorieArr.splice(removeIndex, 1));
  };

  const onReset = () => {
    dispatch(setSelectedFood([]));
  };

  // 페이지 입장시 칼로리 요청
  useEffect(() => {
    fetchCalorieData();
  }, []);

  return (
    <>
      <div className="text-center my-6">
        <p className="text-xl	">총칼로리</p>
        <p className="text-3xl	">{totalFoodCalorie}</p>
      </div>
      <form
        onSubmit={e => {
          submitSeletedFood;
        }}
        id="SelectedMeal"
      >
        <div className="form-control">
          <ul className="bg-base-100 rounded-box">
            {selectedFood.map((name, index) => {
              return (
                <li
                  className="flex items-center justify-between p-3 border-b border-solid  border-slate-800"
                  key={index}
                >
                  <span>{name}</span>
                  <button
                    type="button"
                    className="btn-sm"
                    onClick={() => {
                      onRemoved(name);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
          <Link
            to={'/AddMeal'}
            className="p-3 bg-inherit	bg-slate-800 text-white"
          >
            음식추가 +{' '}
          </Link>
        </div>
        <Link
          to={'/'}
          className="btn btn-block mt-4"
          type="submit"
          onClick={onReset}
        >
          완료
        </Link>
      </form>
    </>
  );
};

export default SelectedMeal;
