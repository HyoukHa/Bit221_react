/**
 * 2022.08.01 (M)
 * Parents.jsx
 * 
 * 작성자 : HH
 * 작업 시작일 : 2022.08.01
 * 최종 수정일 : 2022.08.01
 */

import React, { memo, useState } from 'react';
import Child from './Child';

const Parents = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const increaseParentsAge = () => {
    setParentAge(parentAge + 1);
  }

  const increaseChildAge = () => {
    setChildAge(childAge + 1);
  }

  console.log("Rendering abt Parents");

  return (
    <div className="container border">
      <div className="alert alert-info">
        <h5>
          <i className="fa-solid fa-person-breastfeeding"></i>
          <span>age: {parentAge}</span>
        </h5>
      </div>

      <div className="mb-3 d-flex justify-content-center">
        <button className="btn btn-secondary me-2" onClick={increaseParentsAge}>부모 나이 증가</button>
        <button className="btn btn-warning" onClick={increaseChildAge}>자식 나이 증가</button>
      </div>
      <Child age={childAge} />
    </div>
  );
};

export default memo(Parents);