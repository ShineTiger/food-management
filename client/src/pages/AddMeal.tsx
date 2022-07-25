import React, { useState } from 'react';

const AddMeal = () => {
  const [search, setSearch] = useState('');

  const handleInputValue = e => {
    setSearch(e.target.value);
  };

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

  const [autoComplete, setAutoComplete] = useState(dummyData);

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
        <div>
          <ul>
            {autoComplete.map(i => (
              <li key={i.id}>
                <label>{i.name}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AddMeal;
