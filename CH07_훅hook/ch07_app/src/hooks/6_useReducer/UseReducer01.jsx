import React, {useReducer, useState} from "react";

/**
 * useReducer
 * state 생성 및 관리 도구
 *
 * 사용 :
 *  여러개의 하위값을 갖는 복잡한 state를 다뤄야 할때
 *
 * {
 *  teacher : "John",
 *  student : ["", "", ""]
 *  stuCount: 3,
 *  location: [{country: US}]
 * }
 *
 *
 * 3가지 기본 개념 요소
 * Reducer  = () => { return 컴포넌트 state 값을 변경 };
 * dispatch = () => { return 컴포넌트의 state 변경 요청 };
 * action   = () => { return 컴포넌트의 state 변경 };
 */

const ACTION_TYPES = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.DEPOSIT:
      return state + action.payload;
    case ACTION_TYPES.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

const UseReducer01 = () => {
  const [money, setMoney] = useState(0);
  const [account, dispatch] = useReducer(reducer, 0);

  return (
    <div className="container">
      <h1>Bank With Reducer</h1>

      <h3>account : {account}</h3>

      <div>
        <input
          type="number"
          className="form-control"
          value={money}
          onChange={(e) => {
            setMoney(parseInt(e.target.value));
          }}
          type="number"
          step="10000000000"
        />
        <button
          className="btn btn-success me-3"
          onClick={() => {
            dispatch({type: ACTION_TYPES.DEPOSIT, payload: money});
          }}
        >
          예금
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch({type: ACTION_TYPES.WITHDRAW, payload: money});
          }}
        >
          출금
        </button>
      </div>
    </div>
  );
};

export default UseReducer01;
