import React, { useEffect, useState } from 'react';
import { getRegExp } from 'korean-regexp';
import addmealCss from './AddMeal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setFoodNames } from '../redux/slice/foodNameSlice';
import { setSelectedFood } from '../redux/slice/seletedFoodSlice';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';

const AddMeal = () => {
  const dispatch = useDispatch();

  const selectedFood: string[] = useSelector(
    (store: RootState) => store.selectedFoods.checkedInput,
  );

  const [searchInputValue, setsearchInputValue] = useState<string>(''); //검색창에 들어가는 값
  const [regexValue, setRegexValue] = useState<RegExp>(); //검색창에 들어가는 값을 정규식으로 변환해서 들어가는 값(라이브러리 이용할때 씀)
  const [foodNameList, setFoodNameList] = useState<FoodNameType[]>([]);

  const fetchData = async () => {
    const foodData = (await axios.get('/api/foodName')).data.message;
    setFoodNameList(foodData);
  };

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getKorean: RegExp = getRegExp(e.target.value, {});
    setRegexValue(getKorean);
    setsearchInputValue(e.target.value);
  };

  const onChecked = (selected: boolean, name: string) => {
    if (selected) {
      dispatch(setSelectedFood([...selectedFood, name]));
    } else if (!selected) {
      //name과 같지 않은것만 반환함 -> name과 같은건 selectedItem에서 삭제한다

      dispatch(setSelectedFood(selectedFood.filter(el => el !== name)));
    }
  };

  const onRemoved = (name: string) => {
    dispatch(setSelectedFood(selectedFood.filter(el => el !== name)));
  };

  const submitSeletedFood = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    axios.post('api/testSuccess', { method: 'POST', body: new FormData() });
  };

  const AutoCompleteBox = () => {
    const matchWordList = foodNameList.filter(text =>
      text.name.match(regexValue!),
    );

    return (
      <>
        <ul className="menu bg-base-100 rounded-box">
          {matchWordList.map(item => {
            const complateListRegex =
              regexValue && item.name.match(regexValue.source);
            const activeText = complateListRegex && complateListRegex[0];
            return (
              <li key={item._id}>
                <a className={addmealCss.nogap}>
                  <input
                    type="checkbox"
                    className="checkbox mr-3"
                    value={item.name}
                    onChange={e => {
                      onChecked(e.target.checked, e.target.value);
                    }}
                    checked={selectedFood.includes(item.name) ? true : false}
                  />
                  <span className="text-orange-500">{activeText}</span>
                  {activeText && item.name.replace(activeText, '')}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  // 페이지 입장시 최초 1회 음식 이름 리스트 로드
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <form className="mt-4" onSubmit={e => submitSeletedFood} id="AddMeal">
        <div className="form-control">
          {selectedFood.length !== 0 && (
            <p>{selectedFood.length}개 선택했습니다</p>
          )}
          <div className="badge-list py-4">
            {selectedFood.length !== 0 &&
              selectedFood.map((name, index) => {
                return (
                  <span className="badge mr-1.5" key={index}>
                    {name}
                    <button
                      type="button"
                      value={name}
                      onClick={() => {
                        onRemoved(name);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-4 h-4 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </span>
                );
              })}
          </div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            onChange={handleInputValue}
          />
        </div>
        <div className="mt-4">{searchInputValue && <AutoCompleteBox />}</div>
        {selectedFood.length !== 0 && (
          <Link
            to={'/SelectedMeal'}
            className="btn btn-block mt-4"
            type="submit"
          >
            다음
          </Link>
        )}
      </form>
    </div>
  );
};

export default AddMeal;
