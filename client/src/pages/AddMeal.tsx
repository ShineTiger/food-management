import { useState } from 'react';
import addmealCss from './AddMeal.module.css';
import { getRegExp } from 'korean-regexp';

const AddMeal = () => {
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

  const [searchInputValue, setsearchInputValue] = useState<string>(''); //검색창에 들어가는 값
  const [regexValue, setRegexValue] = useState<RegExp>(); //검색창에 들어가는 값을 정규식으로 변환해서 들어가는 값(라이브러리 이용할때 씀)

  const handleInputValue = (e: { target: { value: string } }) => {
    const getKorean: RegExp = getRegExp(e.target.value, {});
    setRegexValue(getKorean);
    setsearchInputValue(e.target.value);
  };

  const CompleteBox = () => {
    const matchTextList = dummyData.filter(
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
