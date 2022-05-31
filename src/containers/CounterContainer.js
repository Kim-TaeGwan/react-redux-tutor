import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부른다.
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  // 임시 함수
  increase: () => {
    dispatch(increase()); // 디스패치
    console.log("increase");
  },
  decrease: () => {
    dispatch(decrease()); // 디스패치
    console.log("decrease");
  },
});

// 컴포넌트를 리덕스와 연동하려면 아래 코드 처럼 react-redux 에서 제공하는 connect 함수를 사용해야힌다.
// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// mapStateToProps 는 리덕스 스토어 안의 상태를 컴포넌트의 props 로 넘겨주기 위해 설정하는 함수.
// mapDispatchToProps 는 액션 생성 함수를 컴포넌트의 props 로 넘겨주기 위 사용하는 함수

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// mapStateToProps 와 mapDispatchToProps 에서 반환하는 객체 내부의 값들은 컴포넌트의 props 로 전달된다.
// mapStateToProps 는 state 를 파라미터로 받아 오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킨다.
// mapDispatchToProps 의 경우 store 의 내장 함수 dispatch 를 파라미터로 받아온다.
