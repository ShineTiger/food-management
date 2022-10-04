import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className="menu bg-base-100 p-2 rounded-box text-center">
      <div className="divider"></div>
      <li className="text-center">
        <Link to={'/login'}>로그아웃</Link>
      </li>
      <li className="text-error text-center">
        <Link to={'/login'}>회원탈퇴</Link>
      </li>
    </ul>
  );
};

export default Menu;
