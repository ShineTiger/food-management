// Test Api사용법
/**
 * @param {string} dummyUrl - request요청 url
 * @param {any} input - request요청시 함께 보내는 데이터
 * @param {any} output - response로 받고자 하는 더미데이터 삽입
 * @returns {any} output -
 *
 */

export const apiTest: any = (dummyUrl: string, input?: any, output?: any) => {
  return new Promise((resolve, reject) => {
    const response = { data: output ? output : 'Hello World!' }; // dummy response
    resolve(response);
  });
};
