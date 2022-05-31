import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

// combineReducers 유틸 함수를 사용하여 리듀서를 하나에 함쳐줌
// 원래는 createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야 한다.

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
