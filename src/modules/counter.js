// 액션 타입 정의
// 액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈 이름/액션 이름'과 같은 형태로 작성한다.
// 문자열 안에 모듈 이름을 넣음 으로써, 나중에 프로젝트가 커졌을 때 액션의 이름이 충돌되지 않게 해준다.
import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// redux-action 을 사용하면 액션 생성 함수를 더 짧게 사용할 수 있다.
// createAction 을 사용하면 매번 객체를 직접 만들어 줄 필요없이 더욱 간단하게 액션 생성 함수를 선언할 수 있다.

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  // 초기 상태에는 number 값을 설정.
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
