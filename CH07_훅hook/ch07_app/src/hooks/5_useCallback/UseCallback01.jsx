import React, {useState, useMemo, useCallback, useEffect} from "react";

/**
 * useCallback()
 *
 * 값이 아닌 함수를 변환
 *
 * 자바스크립트에서 함수는 객체의 한 종류이다.
 */

const UseCallback01 = () => {
  const [number, setNumber] = useState(0);

  // const someFunc = () => {
  //   console.log(`someFunc : ${number}`);
  // };

  const someFunc = useCallback(() => {
    console.log(`someFunc : ${number}`);
  }, [number]);

  useEffect(() => {
    console.log(`someFunc가 변경됨!`);
  }, [someFunc]);

  return (
    <div>
      <input
        className="form-control"
        type={"number"}
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button type="button" className="btn btn-primary" onClick={someFunc}>
        Call Some Func
      </button>
    </div>
  );
};

export default UseCallback01;
