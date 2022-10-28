import React, { useEffect, useState } from 'react';
import { getRegExp } from 'korean-regexp';
import addmealCss from './SearchFoods.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { asyncUpFetch } from '../redux/slice/nameCalorieSlice';
import { setSelectedFood } from '../redux/slice/seletedFoodSlice';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';

const SearchFoods = () => {
  const dispatch = useDispatch<AppDispatch>();

  const selectedFood: nameCalorieData[] = useSelector(
    (store: RootState) => store.selectedFoods.value,
  );

  const foodNameData: nameCalorieData[] = useSelector((store: RootState) => {
    return store.nameCalorieData.value;
  });

  const [searchInputValue, setsearchInputValue] = useState<string>(''); //검색창에 들어가는 값
  const [regexValue, setRegexValue] = useState<RegExp>(); //검색창에 들어가는 값을 정규식으로 변환해서 들어가는 값(라이브러리 이용할때 씀)

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getKorean: RegExp = getRegExp(e.target.value, {});
    setRegexValue(getKorean);
    setsearchInputValue(e.target.value);
  };

  const onChecked = (selected: boolean, item: nameCalorieData, e: string) => {
    if (selected) {
      dispatch(setSelectedFood([...selectedFood, item]));
    } else if (!selected) {
      //name과 같지 않은것만 반환함 -> name과 같은건 selectedItem에서 삭제한다
      dispatch(setSelectedFood(selectedFood.filter(el => el.name !== e)));
    }
  };

  const onRemoved = (e: string) => {
    dispatch(setSelectedFood(selectedFood.filter(el => el.name !== e)));
  };

  const submitSeletedFood = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    axios.post('api/testSuccess', { method: 'POST', body: new FormData() });
  };

  const AutoCompleteBox = () => {
    const matchWordList = foodNameData.filter(food =>
      food.name.match(regexValue!),
    );

    const getHighlightedText = (text: string, highlight: string) => {
      const parts: string[] | undefined = text.split(
        new RegExp(`(${highlight})`),
      );
      return (
        <span>
          {parts.map((part, i) =>
            part === highlight ? (
              <span key={i} className="text-orange-500">
                {part}
              </span>
            ) : (
              part
            ),
          )}
        </span>
      );
    };

    return (
      <>
        <ul className="menu bg-base-100 rounded-box">
          {matchWordList
            .map((item, i) => {
              return (
                <li key={i}>
                  <a className={addmealCss.nogap}>
                    <input
                      type="checkbox"
                      className="checkbox mr-3"
                      value={item.name}
                      onChange={e => {
                        onChecked(e.target.checked, item, e.target.value);
                      }}
                      checked={selectedFood.includes(item) ? true : false}
                    />
                    {getHighlightedText(item.name, searchInputValue)}
                  </a>
                </li>
              );
            })
            .splice(0, 10)}
        </ul>
      </>
    );
  };

  // 페이지 입장시 최초 1회 음식 이름 리스트 로드
  useEffect(() => {
    dispatch(asyncUpFetch());
    console.log(foodNameData);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <form
        className="mt-4"
        onSubmit={e => submitSeletedFood}
        id="selectedFoods"
      >
        <div className="form-control">
          {selectedFood.length !== 0 && (
            <p>{selectedFood.length}개 선택했습니다</p>
          )}
          <div className="badge-list py-4">
            {selectedFood.length !== 0 &&
              selectedFood.map((el, index) => {
                return (
                  <span className="badge mr-1.5" key={index}>
                    {el.name}
                    <button
                      type="button"
                      value={el.name}
                      onClick={e => {
                        onRemoved(el.name);
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

export default SearchFoods;
