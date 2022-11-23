import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLoginUser } from '../redux/slice/loginUserSlice';
import Join from './Join';

interface LoginFormType {
  userId: string;
  password: string;
}
const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<LoginFormType>();

  const mailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const navigate = useNavigate();
  const onVaild: SubmitHandler<LoginFormType> = userdata => {
    //로그인 폼 전달
    axios
      .post('api/login', userdata)
      .then(response => {
        // 로그인 성공시
        if (response.data.status === 'success') {
          localStorage.setItem('token', response.data.message);
          dispatch(
            setLoginUser({ id: userdata.userId, name: userdata.userId }),
          );
          navigate('/', { replace: true });
        } else if (response.data.status === 'fail') {
          alert(response.data.message);
        } else if (response.data.status === 'error') {
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(`${error} '원인을 알 수 없는 오류가 발생했습니다.'`);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onVaild)}>
        <h2 className="text-2xl py-3 leading-10 font-medium">로그인</h2>
        <input
          {...register('userId', {
            required: '이메일을 입력해 주세요',
            pattern: {
              value: mailRegex,
              message: '이메일 양식이 올바르지 않습니다',
            },
          })}
          placeholder="이메일"
          className="input input-bordered w-full"
        />

        <label className="label">
          <span className="label-text-alt text-red-600">
            {errors.userId && errors.userId.message && errors.userId.message}
          </span>
        </label>

        <input
          type="password"
          {...register('password', {
            required: '비밀번호를 입력해 주세요',
          })}
          placeholder="비밀번호"
          className="input input-bordered w-full"
        />

        <label className="label">
          <span className="label-text-alt text-red-600">
            {errors.password &&
              errors.password.message &&
              errors.password.message}
          </span>
        </label>
        <Link to={'../Join'} className="link">
          회원가입
        </Link>
        <button className="btn btn-block mt-4" type="submit">
          로그인
        </button>
      </form>
    </>
  );
};

export default Login;
