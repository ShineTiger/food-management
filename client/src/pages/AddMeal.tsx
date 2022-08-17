import React, { useEffect, useState } from 'react';
import { getRegExp } from 'korean-regexp';
import addmealCss from './AddMeal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setFoodNames } from '../redux/slice/foodNameSlice';

const dummyData = [
  { id: 1, name: '바나나' },
  { id: 2, name: '바닐라라떼' },
  { id: 3, name: '바나나우유' },
  { id: 4, name: '보리밥' },
  { id: 5, name: '자라탕' },
  { id: 6, name: '장조림' },
  { id: 7, name: '밤밥' },
  { id: 8, name: '반역' },
];

const AddMeal = () => {
  const dispatch = useDispatch();
  const foodNameList = useSelector(
    (store: RootState) => store.foodNames.foodNameList,
  );

  const [stringValue, setStringValue] = useState<string>('');
  const [regexValue, setRegexValue] = useState<RegExp>();
  const [isCompleteBox, setIsCompleteBox] = useState(false);
  const [completeList, setCompleteList] = useState<FoodNameType[]>([]);

  const handleInputValue = (e: { target: { value: string } }) => {
    const getKorean: RegExp = getRegExp(e.target.value, {
      initialSearch: true,
      startsWith: true,
    });
    setRegexValue(getKorean);
    setStringValue(e.target.value);
  };

  const handleCompleteList = () => {
    if (stringValue === '') {
      setIsCompleteBox(false);
    } else {
      setIsCompleteBox(true);
      const matchTextList = dummyData.filter(text =>
        text.name.match(stringValue),
      );
      setCompleteList(matchTextList);
    }
  };

  useEffect(() => {
    handleCompleteList();
  }, [regexValue]);

  // 페이지 입장시 최초 1회 음식 이름 리스트 로드
  useEffect(() => {
    // TODO: 더미데이터 => API 응답 데이터
    dispatch(setFoodNames(dummyData));
    setCompleteList(foodNameList);
  }, []);

  return (
    <>
      <div className="px-2.5">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            onChange={handleInputValue}
          />
        </div>
        {isCompleteBox && (
          <div className="dropdown">
            <ul className="menu p-2 shadow bg-base-100 rounded-box w-52">
              {completeList.map(item => {
                return (
                  <li key={item.id}>
                    <a className={addmealCss.nogap}>
                      <span className="text-orange-500">{stringValue}</span>
                      {item.name.replace(stringValue, '')}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default AddMeal;
