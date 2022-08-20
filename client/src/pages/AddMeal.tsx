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
  const foodNameList: FoodNameType[] = useSelector(
    (store: RootState) => store.foodNames.foodNameList,
  );

  const [searchInputValue, setsearchInputValue] = useState<string>(''); //검색창에 들어가는 값
  const [regexValue, setRegexValue] = useState<RegExp>(); //검색창에 들어가는 값을 정규식으로 변환해서 들어가는 값(라이브러리 이용할때 씀)

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getKorean: RegExp = getRegExp(e.target.value, {});
    setRegexValue(getKorean);
    setsearchInputValue(e.target.value);
  };

  const CompleteBox = () => {
    const matchTextList = foodNameList.filter(
      text => regexValue && text.name.match(regexValue.source),
    );

    return (
      <>
        <ul className="menu bg-base-100 rounded-box">
          {matchTextList.map(item => {
            const complateListRegex =
              regexValue && item.name.match(regexValue.source);
            const activeText = complateListRegex && complateListRegex[0];
            return (
              <li key={item.id}>
                <a className={addmealCss.nogap}>
                  <input type="checkbox" className="checkbox mr-3" />
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
    // TODO: 더미데이터 => API 응답 데이터
    dispatch(setFoodNames(dummyData));
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="mt-4">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            onChange={handleInputValue}
          />
        </div>
        <div className="mt-4">{searchInputValue && <CompleteBox />}</div>
      </div>
    </div>
  );
};

export default AddMeal;
