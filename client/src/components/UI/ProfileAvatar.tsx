import React from 'react';
import { useNavigate } from 'react-router';

const ProfileAvatar = () => {
  const navigate = useNavigate();
  return (
    <label
      onClick={() => {
        navigate('/mypage');
      }}
      className="btn btn-circle avatar"
    >
      <div className="rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      </div>
    </label>
  );
};

export default ProfileAvatar;
