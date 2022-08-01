import React, {useState, useEffect, useRef} from "react";

const UseRef02 = () => {
  const [stateValue, setStateValue] = useState(0);
  const refValue = useRef(0);

  const increaseCountState = () => {
    setStateValue(stateValue + 1);
  };

  const increaseCountRef = () => {
    console.log(++refValue.current);
  };

  return (
    <div className="container">
      <table>
        <tr>
          <td>State : </td>
          <td>{stateValue}</td>
        </tr>
        <tr>
          <td>Ref : </td>
          <td>{refValue.current}</td>
        </tr>
      </table>
      {/* <h3>State : {stateValue}</h3>
      <h3>Ref &nbsp;&nbsp;&nbsp;&nbsp;: 0</h3> */}

      <button className="btn btn-info me-3" onClick={increaseCountState}>
        State &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className="btn btn-success" onClick={increaseCountRef}>
        Ref &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </div>
  );
};

export default UseRef02;
