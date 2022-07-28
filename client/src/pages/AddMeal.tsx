import React, { useEffect, useState } from 'react';

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

  const [serachInput, setSearchInput] = useState('');
  const [isInputHaveValue, setIsInputHaveValue] = useState(false);
  const [autoCompleteBox, setautoCompleteBox] = useState(dummyData);

  const handleInputValue = e => {
    setSearchInput(e.target.value);
  };

  //const makeDataArray = dummyData.map(i => i.name);

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
      </div>
    </>
  );
};

export default AddMeal;
