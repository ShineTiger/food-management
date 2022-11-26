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

// (특정 문자열을 기준으로 리스트를 정렬)
// return 값이 음수면 a가 앞, 양수면 b가 앞
export const searchSort = (a: string, b: string, text: string): number => {
  // 검색어를 우선시하여, 음식배열을 정렬함
  const aWordIndex = a.indexOf(text);
  const bWordIndex = b.indexOf(text);

  // a, b모두가 text를 가지고 있고, index가 동일할 때
  if (aWordIndex === bWordIndex && aWordIndex !== -1) {
    return a.length - b.length;
    // a, b 모두가 text를 가지고 있고, index가 다를 때
  } else if (aWordIndex !== -1 && bWordIndex !== -1) {
    return aWordIndex < bWordIndex ? -1 : 1;
    // a만 text를 가지고 있을 경우
  } else if (aWordIndex !== -1 && bWordIndex === -1) {
    return -1;
    // b만 text를 가지고 있을 경우
  } else if (aWordIndex === -1 && bWordIndex !== -1) {
    return 1;
  } else {
    return b.localeCompare(a, 'ko');
  }
};
