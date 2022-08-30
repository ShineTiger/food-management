import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

interface JoinFormType {
  id: string;
  pw: string;
  nick: string;
  idConfirm: string;
  pwConfirm: string;
}
const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<JoinFormType>();

  const IdPwRegex = /^[a-zA-Z0-9]+$/;
  const nickRegex = /^[ㄱ-ㅎ가-힣]+$/;

  const onVaild: SubmitHandler<JoinFormType> = userdata => {
    //id data 요청
    const idRequest = () => {
      axios
        .get('http://localhost:5000/testRegster123')
        .then(function (response) {
          return response;
        });
    };

    //id 중복확인
    if (userdata.id !== userdata.idConfirm) {
      setError(
        'idConfirm',
        { message: '중복된 아이디입니다' },
        { shouldFocus: true },
      );
    }

    console.log(userdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onVaild)}>
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
              message: '아이디는 알파벳과 숫자로만 만들 수 있습니다',
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
              message: '비밀번호는 알파벳과 숫자로만 만들 수 있습니다',
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

        <input
          type="password"
          {...register('pwConfirm', {
            required: true,
            validate: (val: string) => {
              if (watch('pw') != val) {
                return '비밀번호가 일치하지 않습니다';
              }
            },
          })}
          placeholder="비밀번호 확인"
          className="input input-bordered w-full"
        />

        <label className="label">
          <span className="label-text-alt text-red-600">
            {errors.pwConfirm &&
              errors.pwConfirm.message &&
              errors.pwConfirm.message}
          </span>
        </label>

        <input
          {...register('nick', {
            required: '닉네임을 입력해 주세요',
            minLength: {
              value: 1,
              message: '1자 이상 입력해 주세요',
            },
            maxLength: {
              value: 15,
              message: '15자 이하 입력해 주세요',
            },
            pattern: {
              value: nickRegex,
              message: '닉네임은 한글로만 만들 수 있습니다',
            },
          })}
          placeholder="닉네임"
          className="input input-bordered w-full"
        />

        <label className="label">
          <span className="label-text-alt text-red-600">
            {errors.nick && errors.nick.message && errors.nick.message}
          </span>
        </label>

        <button className="btn btn-block mt-4" type="submit">
          회원가입
        </button>
      </form>
    </>
  );
};

export default Join;
