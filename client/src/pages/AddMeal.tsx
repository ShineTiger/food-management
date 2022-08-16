import React, { useEffect, useState } from 'react';
import { getRegExp } from 'korean-regexp';
import e from 'express';
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

  const [stringValue, setStringValue] = useState<string>('');
  const [regexValue, setRegexValue] = useState<RegExp>();
  const [isCompleteBox, setIsCompleteBox] = useState(false);
  const [completeList, setCompleteList] = useState(dummyData);

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

      const matchTextList = dummyData.filter(
        text => regexValue && text.name.match(regexValue.source),
      );

      setCompleteList(matchTextList);
    }
  };

  useEffect(() => {
    handleCompleteList();
  }, [regexValue]);

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
                // 정규표현식에 통과되는 텍스트를 색칠하는 로직
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
          </div>
        )}
      </div>
    </>
  );
};

export default AddMeal;
