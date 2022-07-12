import React from 'react';
import { useState } from 'react';
import Modal from '../components/Modal';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = value => {
    setIsOpen(value);
  };

  return (
    <>
      <div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>

            <label
              onClick={() => handleModal(true)}
              htmlFor="my-modal"
              className="btn modal-button"
            >
              open modal
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">{isOpen && <Modal />}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
