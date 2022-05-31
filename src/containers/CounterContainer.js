import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부른다.
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// mapDIspatchToProps에 해당하는 파라미터를 함수형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 넣어준다.
// 아래와 같이 두번째 파라미터를 아예 객체 형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신해 준다.

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
