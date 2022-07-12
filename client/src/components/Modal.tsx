import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const Modal = () => {
  return (
    <label className="modal-box relative" htmlFor="">
      <ul>
        <li>
          <Link to="/Addmeal">
            <input type="checkbox" name="morning"></input>
            <label htmlFor="morning">아침</label>
          </Link>
        </li>
        <li>
          <input type="checkbox" name="lunch"></input>
          <label htmlFor="lunch">점심</label>
        </li>
        <li>
          <input type="checkbox" name="dinner"></input>
          <label htmlFor="dinner">저녁</label>
        </li>
        <li>
          <input type="checkbox" name="snack"></input>
          <label htmlFor="snack">간식</label>
        </li>
      </ul>

      {/* <div className="modal-action">
          <label htmlFor="my-modal" className="btn">
            Yay!
          </label>
        </div> */}
    </label>
  );
};

export default Modal;
