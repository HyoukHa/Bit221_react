/**
 * 2022.08.01 (M)
 * Child.jsx
 * 
 * React.memo 최적화
 * 
 * render가 필요한 상황이 생길때마다
 * 자신이 받는 props에 변화가 있는지 없는지 확인하여
 * 있다면 렌더링을 실행시키고, 없다면 기존결과를 재사용한다.
 */

import React, { memo, useEffect } from 'react';

const Child = ({ name, age }) => {
  console.log(name === undefined);


  console.log("Rendering abt Child...");
  return (
    <div className="alert alert-success">
      <h5>
        <i className="fa-solid fa-children"></i>
      </h5>
      <hr />
      <div className="d-flex flex-column">
        <span>name : {name}</span>
        <span>age: {age}</span>
      </div>
    </div>
  );
};
/**
 * 최적화(render 이전에 props 검사)
 */
export default memo(Child);