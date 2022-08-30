import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginFormType {
  id: string;
  pw: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<LoginFormType>();

  const IdPwRegex = /^[a-zA-Z0-9]+$/;

  const onPwConfirm: SubmitHandler<LoginFormType> = userdata => {
    console.log(userdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onPwConfirm)}>
        <h2 className="text-2xl py-3 leading-10 font-medium">회원가입</h2>
        <input
          {...register('id', {
            required: '아이디를 입력해 주세요',
            minLength: {
              value: 4,
              message: '4자 이상 입력해 주세요',
            },
            maxLength: {
              value: 15,
              message: '15자 이하 입력해 주세요',
            },
            pattern: {
              value: IdPwRegex,
              message: '아이디는 알파벳과 숫자로만 입력할 수 있습니다',
            },
          })}
          placeholder="아이디"
          className="input input-bordered w-full"
        />

        <label className="label">
          <span className="label-text-alt text-red-600">
            {errors.id && errors.id.message && errors.id.message}
          </span>
        </label>

        <input
          type="password"
          {...register('pw', {
            required: '비밀번호를 입력해 주세요',
            minLength: {
              value: 4,
              message: '4자 이상 입력해 주세요',
            },
            maxLength: {
              value: 15,
              message: '15자 이하 입력해 주세요',
            },
            pattern: {
              value: IdPwRegex,
              message: '비밀번호는 알파벳과 숫자로만 입력할 수 있습니다',
            },
          })}
          placeholder="비밀번호"
          className="input input-bordered w-full"
        />

        <label className="label">
          <span className="label-text-alt text-red-600">
            {errors.pw && errors.pw.message && errors.pw.message}
          </span>
        </label>

        <button className="btn btn-block mt-4" type="submit">
          로그인
        </button>
      </form>
    </>
  );
};

export default Login;
