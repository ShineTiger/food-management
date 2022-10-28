import React from 'react';
import ModalCard from '../UI/ModalCard';
import ModalButton from '../UI/ModlButton';
import { Link, useNavigate } from 'react-router-dom';
import modalCss from './Custom.module.css';
import axios, { Axios } from 'axios';

const MainModal = () => {
  // TODO: 이날 먹은 음식이 있는지 검사
  const isEmptyMeal = false;

  const navigate = useNavigate();

  const handleSelect = (queryName: string) => {
    setTimeout(() => navigate(`/SearchFoods?type=${queryName}`), 200);
    axios.post('/api/testSuccess', queryName);
  };

  return (
    <>
      <ModalButton id={'my-modal-4'} label="식사 추가하기"></ModalButton>
      <ModalCard id={'my-modal-4'}>
        <ul>
          <li>
            <label className={`label cursor-pointer ${modalCss.nogap}`}>
              <input
                type="checkbox"
                onChange={() => handleSelect('breakfast')}
                className="checkbox mr-3"
              />
              <span>아침</span>
            </label>
          </li>
          <li>
            <label className={`label cursor-pointer ${modalCss.nogap}`}>
              <input
                type="checkbox"
                onChange={() => handleSelect('lunch')}
                className="checkbox mr-3"
              />
              <span>점심</span>
            </label>
          </li>
          <li>
            <label className={`label cursor-pointer ${modalCss.nogap}`}>
              <input
                type="checkbox"
                onChange={() => handleSelect('dinner')}
                className="checkbox mr-3"
              />
              <span>저녁</span>
            </label>
          </li>
          <li>
            <label className={`label cursor-pointer ${modalCss.nogap}`}>
              <input
                type="checkbox"
                onChange={() => handleSelect('snack')}
                className="checkbox mr-3"
              />
              <span>간식</span>
            </label>
          </li>
        </ul>
      </ModalCard>
    </>
  );
};

export default MainModal;
