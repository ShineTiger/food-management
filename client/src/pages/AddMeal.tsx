import React, { useEffect, useState } from 'react';
import { getRegExp } from 'korean-regexp';

const AddMeal = () => {
  /*
  State) input value / type : string / event : onChange
  State) 부가기능 유무 boolean 
  State) 자동완성박스 안에 들어가는 값 / type : array
  style : input value의 length만큼 자동완성박스(array) 안의 요소를 참,거짓을 판별한다 || dummyData의 name을 .split("",1)한다 > (split된 더미데이터, 0).includes(e.target.value) > true
  */
  interface dummyNames {
    id: number;
    name: string;
  }

  //dummyData 타입지정
  const dummyData: Array<dummyNames> = [
    { id: 1, name: '바밤바' },
    { id: 2, name: '밥' },
    { id: 3, name: '밤밥' },
    { id: 4, name: '보리밥' },
    { id: 5, name: '자라탕' },
    { id: 6, name: '장조림' },
  ];

  const [searchInput, setSearchInput] = useState<string | RegExp>('');
  const [isCompleteBox, setIsCompleteBox] = useState(false);
  const [completeList, setCompleteList] = useState(dummyData);

  const handleInputValue = (e: { target: { value: string } }) => {
    const getKorean: RegExp = getRegExp(e.target.value, {
      initialSearch: true,
      startsWith: true,
    });
    setSearchInput(getKorean);
  };

  const handleCompleteList = () => {
    if (searchInput === '') {
      setIsCompleteBox(false);
    } else {
      setIsCompleteBox(true);
      const matchTextList = dummyData.filter(text =>
        text.name.match(searchInput),
      );
      setCompleteList(matchTextList);
    }
  };

  useEffect(() => {
    handleCompleteList();
    console.log(searchInput);
  }, [searchInput]);

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
                const itemNameStirng = item.name.match(searchInput);
                return (
                  <li key={item.id}>
                    <a>
                      <span className="text-orange-500">{itemNameStirng}</span>
                      {item.name.replace(searchInput, '')}
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
