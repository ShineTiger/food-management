// api 테스트용 함수 (무조건 success)
export const apiTest = (dummyUrl?: string) => {
  return new Promise((resolve, reject) => {
    const response = { data: 'Hello world!' }; // dummy response
    resolve(response);
  });
};
