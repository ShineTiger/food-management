import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFood } from '../redux/slice/seletedFoodSlice';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';

const Total = () => {
  const dispatch = useDispatch();

  const selectedFood: nameCalorieData[] = useSelector(
    (store: RootState) => store.selectedFoods.value,
  );

  const submitSeletedFood = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    axios.post('api/testSuccess', { method: 'POST', body: new FormData() });
  };

  const onRemoved = (e: string) => {
    dispatch(setSelectedFood(selectedFood.filter(el => el.name !== e)));
  };

  const totalCalorie = selectedFood
    .map(el => el.kiloCalories)
    .reduce((prev, current, i) => {
      return Math.round(prev + Number(current));
    }, 0);

  const onReset = () => {
    alert('저장 후 메인에 불러오는 기능은 미구현 상태입니다'); //구현이 완료시 삭제될 코드
    dispatch(setSelectedFood([]));
  };

  return (
    <>
      <div className="text-center my-6">
        <p className="text-xl	">총칼로리</p>
        <p className="text-3xl">{totalCalorie}</p>
      </div>
      <form
        onSubmit={e => {
          submitSeletedFood;
        }}
        id="SelectedMeal"
      >
        <div className="form-control">
          <ul className="bg-base-100 rounded-box">
            {selectedFood.map((item, index) => {
              return (
                <li
                  className="flex items-center justify-between p-3 border-b border-solid  border-slate-800"
                  key={index}
                >
                  <p>
                    {item.name}
                    <span className="ml-2 text-sm	">
                      {Math.round(item.kiloCalories)} kcal
                    </span>
                  </p>

                  <button
                    type="button"
                    className="btn-sm"
                    onClick={() => {
                      onRemoved(item.name);
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
            to={'/SearchFoods'}
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

export default Total;
