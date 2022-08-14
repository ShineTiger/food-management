import { useState } from 'react';
import addmealCss from './AddMeal.module.css';

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

  const handleInputValue = (e: { target: { value: string } }) => {
    setsearchInputValue(e.target.value);
  };

  const CompleteBox = () => {
    const matchTextList = dummyData.filter(text =>
      text.name.match(searchInputValue),
    );

    return (
      <>
        <ul className="menu bg-base-100 rounded-box">
          {matchTextList.map(item => {
            return (
              <li key={item.id}>
                <a className={addmealCss.nogap}>
                  <span className="text-orange-500">{searchInputValue}</span>
                  {item.name.replace(searchInputValue, '')}
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
