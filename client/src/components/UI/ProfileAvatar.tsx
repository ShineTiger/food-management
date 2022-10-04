import React from 'react';
import { useNavigate } from 'react-router';

interface ProfileAvatarPropsType {
  hasClickEvent?: boolean;
  isBigSize?: boolean;
  isCircle?: boolean;
}

const ProfileAvatar = ({
  hasClickEvent,
  isBigSize,
  isCircle,
}: ProfileAvatarPropsType) => {
  const navigate = useNavigate();
  return (
    <label
      onClick={() => {
        hasClickEvent && navigate('/mypage');
      }}
      className={`btn btn-circle avatar ${isBigSize && 'w-20 h-20'}`}
    >
      <div className="rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isBigSize ? '40' : '30'}
          height={isBigSize ? '40' : '30'}
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
