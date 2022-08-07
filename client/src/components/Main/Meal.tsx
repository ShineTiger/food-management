import React from 'react';
import Modal from '../Modal';

const Meal = () => {
  return (
    <>
      <h2 className="card-title">식사</h2>
      <p>아직 아무것도 안 드셨네요!</p>

      <label htmlFor="my-modal-4" className="btn modal-button">
        식사 추가
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
          style={{ marginLeft: '0.5rem' }}
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <Modal />
      </label>
    </>
  );
};

export default Meal;
