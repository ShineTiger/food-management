import { useState, useRef, SetStateAction } from 'react';


interface LoginFormType {
  id: string;
  pw: string;
}
const Login = () => {
  const [enteredId, setEnteredId] = useState('');
  const [enteredPw, setEnteredPw] = useState('');

  const inputChangeIdHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setEnteredId(e.target.value);
  };

  const inputChangePwHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setEnteredPw(e.target.value);
  };

  const submitFormHandler = () => {
    fetch('주소', {
      method: 'POST',
      body: JSON.stringify({
        id: enteredId,
        pw: enteredPw,
      }),
    })
      .then(resonse => resonse.json())
      .then(result =>
        result.token ? alert('로그인 성공') : alert(result.message),
      );
  };

  return (
    <form onSubmit={submitFormHandler}>
      <h2 className="text-2xl py-3 leading-10 font-medium">로그인</h2>
      <input
        id="inputId"
        type="text"
        placeholder="아이디"
        className="input input-bordered w-full"
        onChange={inputChangeIdHandler}
        required
      />
      <input
        id="inputId"
        type="text"
        placeholder="비밀번호"
        className="input input-bordered w-full my-2"
        onChange={inputChangePwHandler}
        required
      />
      <button className="btn btn-block mt-4" type="submit">
        로그인
      </button>
    </form>
  );
};

export default Login;
