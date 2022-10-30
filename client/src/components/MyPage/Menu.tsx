import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const removeToken = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <ul className="menu bg-base-100 p-2 rounded-box text-center">
      <li className="text-center">
        <button onClick={removeToken} className="btn btn-outline">
          로그아웃
        </button>
      </li>
      <div className="divider"></div>

      <li className="text-error text-center">
        회원탈퇴 문의는
        <a
          href="mailto:shinetiger.dev@gmail.com"
          className="justify-center underline "
        >
          shinetiger.dev@gmail.com
        </a>
        으로 부탁드립니다
      </li>
    </ul>
  );
};

export default Menu;
