import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState('');
  //useSearchParams로 상위컴포넌트에서 보내주는 QS문을 받는다. 그리고 배열형식으로 반환한다.
  const type = searchParams.get('type');

  useEffect(() => {
    if (window.location.pathname === '/Addmeal') {
      switch (type) {
        case 'brackfast':
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

        default:
          break;
      }
    }
  });

  return (
    <>
      <div className="navbar bg-amber-400">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">{title}</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
