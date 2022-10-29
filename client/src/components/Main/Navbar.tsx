import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Outlet, useSearchParams } from 'react-router-dom';
import ProfileAvatar from '../UI/ProfileAvatar';

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState('');
  //useSearchParams로 상위컴포넌트에서 보내주는 QS문을 받는다. 그리고 배열형식으로 반환한다.
  const type = searchParams.get('type');
  const navigate = useNavigate();
  const ArrowBack = () => {
    return (
      <a className="btn btn-ghost" onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
          <path d="M7.562 17.562.625 10.625q-.146-.146-.208-.302Q.354 10.167.354 10t.063-.323q.062-.156.208-.302l6.958-6.958q.313-.313.761-.313t.76.334q.334.312.313.77-.021.459-.334.771L3.062 10l6.042 6.042q.292.291.292.76 0 .469-.292.76-.312.313-.771.313-.458 0-.771-.313Z" />
        </svg>
      </a>
    );
  };

  useEffect(() => {
    if (window.location.pathname === '/SearchFoods') {
      switch (type) {
        case 'breakfast':
          setTitle('아침');
          break;

        case 'lunch':
          setTitle('점심');
          break;

        case 'dinner':
          setTitle('저녁');
          break;

        case 'snack':
          setTitle('간식');
          break;
      }
    } else if (window.location.pathname === '/mypage') {
      setTitle('회원정보');
    } else if (window.location.pathname === '/') {
      setTitle('마이칼로리');
    }
  });

  return (
    <>
      <div className="navbar bg-amber-400">
        <div className="flex-1">
          {window.location.pathname === '/' ? '' : <ArrowBack />}
          <h2 className="normal-case text-xl font-bold	">{title}</h2>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <ProfileAvatar hasClickEvent={true} isFilled={{ fill: 'white' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
