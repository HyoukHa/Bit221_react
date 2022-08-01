import React, {useState, useMemo} from "react";

/**
 * Memoization(컴퓨터 최적화를 위해서 사용하는 개념)
 * >> 동일한 처리를 하는 함수를 반복적으로 호출해야 할 때
 *
 * 최초 값을 계산할 때 해당 값을 메모리에 저장해서
 * 필요할 때마다 중복 계싼 없이 메모리에서 꺼내 재사용하는 기법
 *
 * useMemo(callback, array)
 * 연산량이 많은 함수의 결과값을 저장해 두었다가
 * 재 호출시 이전 결과값을 바로 반환
 */

const hardCalc = (hardNumber) => {
  let total = 0;

  for (let i = 0; i < 9999999; i++) {
    total += i;
  }
  console.log("hard");
  return total + hardNumber;
};

const easyCalc = (easyNumber) => {
  console.log("E-Z");
  return 1 + easyNumber;
};

const UseMemo01 = () => {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  // const easy = easyCalc(easyNumber);
  const easy = useMemo(() => {
    return easyCalc(easyNumber);
  }, [easyNumber]);

  // const hard = hardCalc(hardNumber);
  const hard = useMemo(() => {
    return hardCalc(hardNumber);
  }, [hardNumber]);

  return (
    <div className="container">
      <div style={{border: "1px solid green", padding: "20px"}}>
        <h5 style={{color: "#999"}}>Hard working</h5>
        <input
          className="form-control"
          type="number"
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> ∫∛ ∝^ = {hard}</span>
      </div>

      <div style={{border: "1px solid green", padding: "20px"}}>
        <h5 style={{color: "#999"}}>Hard working</h5>
        <input
          className="form-control"
          type="number"
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> 1 + input = {easy}</span>
      </div>
    </div>
  );
};

export default UseMemo01;
