import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useEffect, useRef } from 'react';
import { useForm, SubmitHandler, useFormState } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface JoinFormType {
  id: string;
  pw: string;
  nick: string;
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
  const navigate = useNavigate();

  const onValid: SubmitHandler<JoinFormType> = userdata => {
    //회원가입 폼 전달
    axios
      .post('/api/test', { userdata })
      .then(response => {
        console.log(response.data);
        if (
          response.data.status === 'success' &&
          response.data.message === ''
        ) {
          alert('가입완료!');
          navigate('/Login');
        } else if (response.data.status === 'fail') {
          alert(response.data.message);
        } else if (response.data.status === 'error') {
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(`${error} '원인을 알 수 없는 오류가 발생했습니다.'`);
      });

    console.log(userdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
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
            validate: {
              idConfirm: async (val: string) => {
                const data = (
                  await axios.post('/api/test', {
                    val,
                  })
                ).data;
                return data.status === 'success' || '중복 아이디'; //test할땐 true만 사용합니다.
              },
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
