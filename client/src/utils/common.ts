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
export const searchSort = (a: string, b: string, text: string): number => {
  // 검색어를 우선시하여, 음식배열을 정렬함
  const aFirstWord = a.slice(0, text.length);
  const bFirstWord = b.slice(0, text.length);

  // 음식의 첫번째 단어가 서치어일 때 우선 정렬
  if (aFirstWord === text || bFirstWord === text) {
    return a.length - b.length;
  }
  // 서치어를 우선시하여 일반 정렬
  else {
    return b.localeCompare(text, 'ko') - a.localeCompare(text, 'ko');
  }
};
