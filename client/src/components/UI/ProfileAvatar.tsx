import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router';

interface ProfileAvatarPropsType {
  hasClickEvent?: boolean;
  isBigSize?: boolean;
  isCircle?: boolean;
  isFilled?: React.SVGAttributes<SVGSVGElement>;
}

const ProfileAvatar = ({
  hasClickEvent,
  isBigSize,
  isCircle,
  isFilled,
}: ProfileAvatarPropsType) => {
  const navigate = useNavigate();
  return (
    <label
      onClick={() => {
        hasClickEvent && navigate('/mypage');
      }}
      className={`${
        isBigSize &&
        'w-20 h-20 flex w-20 h-20 rounded-full justify-center items-center bg-amber-400'
      }`}
    >
      <div className="rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          width="40"
          {...isFilled}
        >
          <path d="M9.417 29.083q2.458-1.666 5.041-2.541 2.584-.875 5.542-.875 2.958 0 5.562.875 2.605.875 5.063 2.541Q32.333 27 33.104 24.75q.771-2.25.771-4.75 0-5.875-4-9.875t-9.875-4q-5.875 0-9.875 4t-4 9.875q0 2.5.792 4.75.791 2.25 2.5 4.333ZM20 21.375q-2.417 0-4.083-1.667-1.667-1.666-1.667-4.083 0-2.417 1.667-4.083Q17.583 9.875 20 9.875q2.417 0 4.083 1.667 1.667 1.666 1.667 4.083 0 2.458-1.667 4.104-1.666 1.646-4.083 1.646Zm0 15.292q-3.458 0-6.521-1.313-3.062-1.312-5.312-3.583-2.25-2.271-3.542-5.292Q3.333 23.458 3.333 20t1.313-6.5q1.312-3.042 3.583-5.292t5.292-3.562Q16.542 3.333 20 3.333t6.5 1.313q3.042 1.312 5.292 3.562t3.562 5.292q1.313 3.042 1.313 6.5t-1.313 6.479q-1.312 3.021-3.562 5.292T26.5 35.354q-3.042 1.313-6.5 1.313Z" />
        </svg>
      </div>
    </label>
  );
};

export default ProfileAvatar;
