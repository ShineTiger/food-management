import React from 'react';
import ModalCard from '../UI/ModalCard';
import ModalButton from '../UI/ModlButton';
import { Link, useNavigate } from 'react-router-dom';
import modalCss from './Modal.module.css';

const MainModal = () => {
  // TODO: 이날 먹은 음식이 있는지 검사
  const isEmptyMeal = false;

  const navigate = useNavigate();

  const handleSelect = (queryName: string) => {
    setTimeout(() => navigate(`/Addmeal?type=${queryName}`), 200);
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
                onChange={() => handleSelect('morning')}
                className="checkbox checkbox-sm mr-3"
              />
              <span className="label-text">아침</span>
            </label>
          </li>
          <li>
            <Link to="/Addmeal?type=lunch">
              <input type="checkbox" name="lunch" className="checkbox mr-2.5" />
              <label htmlFor="lunch">점심</label>
            </Link>
          </li>
          <li>
            <Link to="/Addmeal?type=dinner">
              <input
                type="checkbox"
                name="dinner"
                className="checkbox mr-2.5"
              />
              <label htmlFor="dinner">저녁</label>
            </Link>
          </li>
          <li>
            <Link to="/Addmeal?type=snack">
              <input type="checkbox" name="snack" className="checkbox mr-2.5" />
              <label htmlFor="snack">간식</label>
            </Link>
          </li>
        </ul>
      </ModalCard>
    </>
  );
};

export default MainModal;
